
const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Request Received", req)
        console.log("File information", file)
        cb(null, "upload/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)+file.originalname
        cb(null, uniqueSuffix);
    }
});

const upload = multer({ storage: Storage });

module.exports = upload;
