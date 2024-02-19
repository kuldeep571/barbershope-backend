const express = require('express');
const
    {
        postdata,
        getTotalHours
    } = require("../Controllers/ScheduleController");

const router = express.Router();

router.post('/', postdata)

router.get('/', getTotalHours);

module.exports = router;