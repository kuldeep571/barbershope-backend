const express = require('express');
// const authenticate = require('../Middlewares/authenticate');

const
    {
        createadmin,
        adminlogin
    } = require("../Controllers/AdminController");

const router = express.Router();

router.post('/createadmin', createadmin);

router.post('/login', adminlogin);

module.exports = router;