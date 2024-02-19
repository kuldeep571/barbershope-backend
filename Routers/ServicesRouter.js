const express = require('express');
const
    {
        postdata,
        getservices,
        getsingle,
        deleteone,
        update
    } = require("../Controllers/ServicesController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getservices);

router.get('/:id', getsingle);

router.delete('/:id', deleteone);

router.put('/:id', update);


module.exports = router;


