const express = require('express');
const {
    Addorder,
    Getorder,
    GetSingleOrder,
    DeleteOrder,
    updatedata
} =require("../Controllers/OrdersController");

const router = express.Router();

router.post('/', Addorder);

router.get('/', Getorder);

router.get('/:id', GetSingleOrder);

router.delete('/:id', DeleteOrder);

router.put('/:id', updatedata);



module.exports = router;