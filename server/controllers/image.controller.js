import multer from 'multer';
import ImageKit from "imagekit";

// imagekit.io Auth definition
// Define in process.env.
var imagekitUpload = new ImageKit({
    publicKey: process.env.imagekit_pub_key,
    privateKey: process.env.imagekit_private_key,
    urlEndpoint: process.env.imagekit_url_endpoint
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
        fileSize: 4000000, //max. Dateigröße 4MB
    },
    fileFilter: checkFileType,
});

// Upload Image to memory
// feldname beim Upload-formular = bookImage
const UploadImageToMemory = upload.single('bookImage');

const ShowUploadInfo = function name(req, res, next) {
    //console.log(req.file);
    console.log("File upload to memory successfull.");
    next();
}

const UploadBookImageToImagekit = function (req, res) {
    console.log("Uploading to Imagekit");
    const file_name = Date.now() + '-' + req.file.originalname;

    imagekitUpload.upload({
        file: req.file.buffer, //required
        fileName: file_name, //required
        folder: "b"
    }).then(response => {
        console.log(response);
        res.send(response)

        // fileId: '6082f6b52c03a6495e0a63f7',
        // name: '1619195575595-mobile-phone_Z92Nxc0Jf.png',
        // size: 3867,
        // filePath: '/1619195575595-mobile-phone_Z92Nxc0Jf.png',
        // url: 'https://ik.imagekit.io/buecherregal/1619195575595-mobile-phone_Z92Nxc0Jf.png',
        // fileType: 'image',
        // height: 512,
        // width: 512,
        // thumbnailUrl: 'https://ik.imagekit.io/buecherregal/tr:n-media_library_thumbnail/1619195575595-mobile-phone_Z92Nxc0Jf.png'

    }).catch(error => {
        console.log(error);
        res.send(error)
    });
};

export default {
    UploadImageToMemory,
    UploadBookImageToImagekit,
    ShowUploadInfo
};
