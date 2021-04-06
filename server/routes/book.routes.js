import express from 'express'
import authCtrl from '../controllers/auth.controller'
import userCtrl from '../controllers/user.controller'
import bookCtrl from '../controllers/book.controller'
import imgCtrl from '../controllers/image.controller'

const router = express.Router()

router.route('/api/books')
    .get(bookCtrl.list) //Seite mit allen hochgeladenen Büchern
    .post(authCtrl.requireSignin, imgCtrl.singleUpload, bookCtrl.create) // login notwendig

router.route('/api/books/:bookId')
    .get(bookCtrl.read) //keine Registrierung nötig
    .put(authCtrl.requireSignin, imgCtrl.singleUpload, authCtrl.hasAuthorizationForBook, bookCtrl.update) // Update with PUT
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, bookCtrl.remove) // Remove with DELETE

router.param('bookId', bookCtrl.bookByID)

export default router