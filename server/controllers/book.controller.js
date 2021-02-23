import Book from '../models/book.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import multer from 'multer'

const create = async (req, res) => {
    const book = new Book(req.body)
    book.image = req.file.path
    /*const newBook = book ({
        image: req.file.path
    }) */
try {
    await book.save() 
    return res.status(200).json({
        message: "Buch erfolgreich hochgeladen!",
        bild: req.file,
        buch: book
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
        // lodash - merge and extend book profile
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