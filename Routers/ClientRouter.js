const express = require('express');
const
    {
        postdata,
        getclient,
        getsingle,
        deleteone,
        update
    } = require("../Controllers/ClientController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getclient);

router.get('/:id', getsingle);

router.delete('/:id', deleteone);

router.put('/:id', update);


module.exports = router;


