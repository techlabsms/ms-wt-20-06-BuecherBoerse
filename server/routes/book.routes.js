import express from 'express'
import authCtrl from '../controllers/auth.controller'
import bookCtrl from '../controllers/book.controller'
import imgCtrl from '../controllers/image.controller'

const router = express.Router()

router.route('/api/books')
    .get(bookCtrl.list) //Seite mit allen hochgeladenen Büchern
    .post(authCtrl.requireSignin, imgCtrl.UploadImageToMemory, imgCtrl.UploadBookImageToImagekit, bookCtrl.create) // login notwendig

router.route('/api/books/upload')
    .post(imgCtrl.UploadImageToMemory, imgCtrl.ShowUploadInfo, imgCtrl.UploadBookImageToImagekit)

// New Route to getBooks by User
router.route('/api/books/user/:userId')
    .get(bookCtrl.bookByUser)

router.route('/api/books/:bookId')
    .get(bookCtrl.read) //keine Registrierung nötig
    .put(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, bookCtrl.update) // Update with PUT
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, bookCtrl.remove) // Remove with DELETE

router.param('bookId', bookCtrl.bookByID)

export default router