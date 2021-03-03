import Book from '../models/book.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import multer from 'multer'

//definiert den Speicherort und den Filenamen
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './server/uploads/')
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname + '-' + Date.now() )
	}
})

//Überprüfung, ob es sich um ein Bild handelt
const checkFileType  = (req,file, cb) => {
  const filetypes = /jpeg|jpg|png/; // Allowed extention
  const mimetype = filetypes.test(file.mimetype);   // Check mime

  if(mimetype == true){
    cb(null,true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
	storage: storage,
	limits:{
		fileSize: 5000000
	},
	fileFilter: checkFileType
});

//feldname beim Upload-formular = bookImage
//der Rest des bodies wird ganz normal durch die book.create funktion verarbeitet
const singleUpload = upload.single('bookImage')




export default {
	singleUpload,
	
}