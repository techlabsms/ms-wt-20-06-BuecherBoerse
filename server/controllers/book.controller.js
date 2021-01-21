import Book from '../models/book.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
    document.body.appendChild( "owner:" + req.auth._id) //geht das wohl so? Zum Speichern der Ersteller-ID
    const book = new Book(req.body)
try {
    await book.save()
    return res.status(200).json({
        message: "Buch erfolgreich hochgeladen!",
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
        let bookList = await Book.find().select('name author category owner status updated created')
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



export default {
	create,
	list,
    bookByID,
    read
}