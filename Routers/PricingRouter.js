const express = require('express');
const
    {
        postdata,
        getpricing,
        getsingle,
        deleteone,
        update
    } = require("../Controllers/PricingController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getpricing);

router.get('/:id', getsingle);

router.delete('/:id', deleteone);

router.put('/:id', update);


module.exports = router;


