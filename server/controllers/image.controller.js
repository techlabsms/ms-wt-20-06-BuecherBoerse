import multer from 'multer';
import imagekit from "imagekit";

// imagekit.io Auth definition
// Define in process.env.
var imagekitUpload = new imagekit({
    publicKey: process.env.imagekit_pub_key || "TEST",
    privateKey: process.env.imagekit_private_key || "TEST",
    urlEndpoint: process.env.imagekit_url_endpoint || "TEST",
});

// Save picture temporally in memory
var storage = multer.memoryStorage()

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
        fileSize: 5000000, //max. Dateigröße 5MB
    },
    fileFilter: checkFileType,
});

// Upload Image to memory
// feldname beim Upload-formular = bookImage
const UploadImageToMemory = upload.single('bookImage');

const ShowUploadInfo = function name(req, res) {
    //console.log(req.file);
    console.log("file uploaded success");
    res.send("file upload success");
}

const UploadBookImageToImagekit = function (req, res) {
    imagekit.upload({
        file: req.file.buffer, //required
        fileName: Date.now() + '-' + req.file.originalname, //required
    }).then(response => {
        console.log(response);
        //res.send(response)
    }).catch(error => {
        console.log(error);
        //res.send(error)
    });
};

export default {
    UploadImageToMemory,
    UploadBookImageToImagekit,
    ShowUploadInfo
};
