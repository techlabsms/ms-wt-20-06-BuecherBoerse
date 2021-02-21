import express from 'express'
import authCtrl from '../controllers/auth.controller'
import userCtrl from '../controllers/user.controller'
import bookCtrl from '../controllers/book.controller'

const router = express.Router()

router.route('/api/books') //Seite mit allen hochgeladenen Büchern
	.get(bookCtrl.list)
	.post(authCtrl.requireSignin, bookCtrl.create)

router.route('/api/books/:bookId')
	.get(bookCtrl.read)		//keine Registrierung nötig
	.put(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, bookCtrl.update) // Update with PUT
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, bookCtrl.remove) // Remove with DELETE

router.param('bookId', bookCtrl.bookByID)

export default router