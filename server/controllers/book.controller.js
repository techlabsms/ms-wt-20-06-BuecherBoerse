import Book from '../models/book.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import { unlink } from 'fs' 


//Buch wird erstellt
const create = async (req, res) => {
    try {
        const book = new Book(req.body)
        book.image = req.file.path    
        await book.save() 
        return res.status(200).json({
            message: "Buch erfolgreich hochgeladen!",
            book: book,
            image: req.file,
            file: `uploads/${req.file.filename}` //Bild wird angezeigt, wenn im Frontent ein Image Tag vorliegt (src=file)

    })
} catch (err) {
    return res.status(400).json({
        message: errorHandler.getErrorMessage(err)
    })
    }
}

//Liste aller Bücher
const list = async (req, res) => {
    try {
        let bookList = await Book.find().select('name author image category owner status updated created')
        res.json(bookList)
    } catch (err) {
        return res.status(400).json({
            message: errorHandler.getErrorMessage(err)
        })
    }
}

//Buch über Buch-ID auswählen 
const bookByID = async (req, res, next, id) => {
    try {
        let book = await Book.findById(id)
        if (!book) {
            return res.status('400').json({
                error: "Buch nicht gefunden"
            })
        }
        req.profile = book
        next()
    }
    catch (err) {
        return res.status('400').json({
            error: "Could not retrieve book"
        })
    }
}

//zuvor mit bookByID ausgewähltes Buch anzeigen
const read = (req, res) => {
    return res.json(req.profile)
}

//verändere Buch mit PUT
const update = async (req, res) => {
    try {
        let book = req.profile 
        //Verändern des Bildes und löschen des alten Bildes
        if (req.file != undefined) {
            console.log('file detected')
            unlink(book.image, (err) =>{})
            book.image = req.file.path
        } else if (req.file === undefined){
            console.log('no file detected')
        } 
        //Verändern der restlichen Buchdaten
        book = extend(book, req.body)
        book.updated = Date.now()
        await book.save()
        res.json(book)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


//lösche Buch
const remove = async (req, res) => {
    try {
        let book = req.profile
        const path = book.image
        //löscht Bild des Buches aus der Datenbank
        unlink(path, (err) => {
            console.log('successfully deleted ' + path)
        }) 
        //löscht die restlichen Buchdaten
        let deletedBook = await book.remove()
        res.json(deletedBook)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}



export default {
	create,
	list,
    bookByID,
    read,
    update,
    remove
}
