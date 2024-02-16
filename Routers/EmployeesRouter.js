const express = require('express');
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({storage: storage})
// const uploadedcloudinaryImages = require('../Middlewares/singleImgUpload')
const
    {
        postdata,
        getemployees,
        getsingle,
        deleteone,
        update
    } = require("../Controllers/EmployeesController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getemployees);

router.get('/:id', getsingle);

router.delete('/:id', deleteone);

router.put('/:id', update);

module.exports = router;


// upload.single("image"), uploadedcloudinaryImages, 