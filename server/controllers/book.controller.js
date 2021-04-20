import Book from '../models/book.model';
import extend from 'lodash/extend';
import errorHandler from './../helpers/dbErrorHandler';
import { unlink } from 'fs';

//Buch wird erstellt
const create = async (req, res) => {
    try {
        const book = new Book(req.body);
        try {
            book.image = `Uploads/${req.file.filename}`;
        } catch (err) {
            return res.status(400).json({
                message: 'You need t upload an image',
            });
        }
        await book.save();
        return res.status(200).json({
            message: 'Buch erfolgreich hochgeladen!',
            book: book,
            image: req.file,
            file: `Uploads/${req.file.filename}`, //Bild wird angezeigt, wenn im Frontend ein Image Tag vorliegt (src=file)
        });
    } catch (err) {
        return res.status(400).json({
            message: errorHandler.getErrorMessage(err),
        });
    }
};

//Liste aller Bücher
const list = async (req, res) => {
    try {
        let bookList = await Book.find().select(
            'name author image category owner status updated created'
        );
        res.json(bookList);
    } catch (err) {
        return res.status(400).json({
            message: errorHandler.getErrorMessage(err),
        });
    }
};

//Erhalte alle Buecher eines bestimmten Users
const bookByUser = async (req, res) => {
    try {
        let books = await Book.find({ owner: req.params.userId }).exec();
        if (!books) {
            return res.status('400').json({
                error: 'User has no books',
            });
        }
        res.json(books);
    } catch (err) {
        return res.status('400').json({
            error: err.message,
        });
    }
};

//Buch über Buch-ID auswählen
const bookByID = async (req, res, next, id) => {
    try {
        let book = await Book.findById(id);
        if (!book) {
            return res.status('400').json({
                error: 'Buch nicht gefunden',
            });
        }
        req.profile = book;
        next();
    } catch (err) {
        return res.status('400').json({
            error: 'Could not retrieve book',
        });
    }
};

//zuvor mit bookByID ausgewähltes Buch anzeigen
const read = (req, res) => {
    return res.json(req.profile);
};

//verändere Buch mit PUT
const update = async (req, res) => {
    try {
        let book = req.profile;
        //Verändern des Bildes und löschen des alten Bildes
        if (req.file !== undefined) {
            unlink(book.image, (err) => {
                if (err) {
                    return res.status(400).json({
                        message: 'internal server error',
                    });
                }
            });
            book.image = `Uploads/${req.file.path}`;
        }
        //Verändern der restlichen Buchdaten
        book = extend(book, req.body);
        book.updated = Date.now();
        await book.save();
        res.json(book);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

//lösche Buch
const remove = async (req, res) => {
    try {
        let book = req.profile;
        //löscht Bild des Buches aus der Datenbank
        unlink(book.image, (err) => {
            if (err) {
                return res.status(400).json({
                    message: 'internal server error',
                });
            }
        });
        //löscht die restlichen Buchdaten
        let deletedBook = await book.remove();
        res.json(deletedBook);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

export default {
    create,
    list,
    bookByID,
    read,
    update,
    remove,
    bookByUser
};
