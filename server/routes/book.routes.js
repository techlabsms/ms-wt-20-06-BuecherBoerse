import express from 'express'
import authCtrl from '../controllers/auth.controller'
import bookCtrl from '../controllers/book.controller'
import imgCtrl from '../controllers/image.controller'

const router = express.Router()

router.route('/api/books')
    .get(bookCtrl.list) //Seite mit allen hochgeladenen Büchern
    .post(authCtrl.requireSignin, imgCtrl.UploadImageToMemory, imgCtrl.UploadBookImageToImagekit, bookCtrl.create) // login notwendig

// For testing picture upload
//router.route('/api/books/upload')
//    .post(imgCtrl.UploadImageToMemory, imgCtrl.ShowUploadInfo, imgCtrl.UploadBookImageToImagekit)

// New Route to getBooks by User
router.route('/api/books/user/:userId')
    .get(bookCtrl.bookByUser)

// check for muliform-data
// Cond Route for book image change
function skipThisRouteMiddleware(req, res, next) {
    console.log(req.body)
    if (req.body.bookImage !== undefined) {
        // Upload New Image
        return next();
    }

    // Jump to next put route
    return next('route');
}

// With new image
router.route('/api/books/:bookId')
    .put(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, skipThisRouteMiddleware, imgCtrl.UploadImageToMemory, imgCtrl.UploadBookImageToImagekit, bookCtrl.update) // Update with PUT

// Without new image
router.route('/api/books/:bookId')
    .put(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, bookCtrl.update) // Update with PUT

router.route('/api/books/:bookId')
    .get(bookCtrl.read) //keine Registrierung nötig
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorizationForBook, imgCtrl.MoveBookToDeleteFolder, bookCtrl.remove) // Remove with DELETE

router.param('bookId', bookCtrl.bookByID)

export default router