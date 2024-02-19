const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})
const uploadedcloudinaryImages = require('../Middlewares/singleImgUpload')
const
    {
        postdata,
        getimport,
        getsingle,
        deletedata,
        updatedata
    } = require("../Controllers/ImportFilesController");

const router = express.Router();

router.post('/', upload.single("uploadfile"), uploadedcloudinaryImages, postdata);

router.get('/', getimport);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

router.put('/:id', updatedata);


module.exports = router;


