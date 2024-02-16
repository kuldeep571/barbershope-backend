const express = require('express');
const
    {
        postdata,
        getsuppliers,
        getsingle,
        deleteone,
        update
    } = require("../Controllers/SuppliersController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getsuppliers);

router.get('/:id', getsingle);

router.delete('/:id', deleteone);

router.put('/:id', update);


module.exports = router;


