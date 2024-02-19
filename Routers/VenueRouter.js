const express = require('express');
const
    {
        postdata,
        getvenue,
        getsingle,
        deleteone,
        update
    } = require("../Controllers/VenueController");

const router = express.Router();

router.post('/', postdata);

router.get('/', getvenue);

router.get('/:id', getsingle);

router.delete('/:id', deleteone);

router.put('/:id', update);


module.exports = router;