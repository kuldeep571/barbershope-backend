const express = require('express');
const upload = require("../Middlewares/uploadcsv")
const
    {
        postdata,
        getimport,
        getsingle,
        deletedata,
        updatedata
    } = require("../Controllers/ImportFilesController");

const router = express.Router();

router.post("/", upload.single("image"), postdata);

router.get('/', getimport);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

router.put('/:id', updatedata);

module.exports = router;