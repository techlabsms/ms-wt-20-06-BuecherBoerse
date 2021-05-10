import multer from 'multer';
import ImageKit from 'imagekit';

// imagekit.io Auth definition
// Define in process.env.
var imagekitUpload = new ImageKit({
  publicKey: process.env.imagekit_pub_key,
  privateKey: process.env.imagekit_private_key,
  urlEndpoint: process.env.imagekit_url_endpoint,
});

// Save picture temporally in memory
var storage = multer.memoryStorage();

// Überprüfung, ob es sich um ein Bild handelt
const checkFileType = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/; // Allowed extention
  const hasMatchingMimetype = filetypes.test(file.mimetype); // Check mime

  if (hasMatchingMimetype == true) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Anwendung verschiedener Upload-Parameter
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 4000000, //max. Dateigröße 4MB
  },
  fileFilter: checkFileType,
});

// Upload Image to memory
// feldname beim Upload-formular = bookImage
const UploadImageToMemory = upload.single('bookImage');

const ShowUploadInfo = function name(req, res, next) {
  //console.log(req.file);
  console.log('File upload to memory successfull.');
  next();
};

const UploadBookImageToImagekit = function (req, res, next) {
  const file_name = Date.now() + '-' + req.file.originalname;

  imagekitUpload
    .upload({
      file: req.file.buffer, //required
      fileName: file_name, //required
      folder: 'b',
    })
    .then((response) => {
      // Add the image url to the response
      res.locals.BookUrl = response.url;
      next();
    })
    .catch((error) => {
      res.send(error);
    });
};

// For later for removing pictures from the db
const MoveBookToDeleteFolder = (req, res, next) => {
  const fileName = req.book.image.split('/').pop()[0];
  const sourceFilePath = '/b/' + fileName;
  const destinationPath = '/d/' + fileName;

  imagekitUpload
    .moveFile(sourceFilePath, destinationPath)
    .then((response) => {
      console.log(response);
      next();
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

export default {
  UploadImageToMemory,
  UploadBookImageToImagekit,
  ShowUploadInfo,
};
