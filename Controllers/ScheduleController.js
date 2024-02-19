const db = require("../Models/ScheduleModel");

const postdata = async (req, res) => {
    try {
        const {
            dayOfWeek,
            hours
        } = req.body;

        const createschedule = await db.create({
            dayOfWeek,
            hours
        })
        res.status(201).json(createschedule);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getTotalHours = async (req, res) => {
    try {
        const totalHoursPerDay = await db.aggregate([
            { $group: { _id: '$dayOfWeek', totalHours: { $sum: '$hours' } } }
        ]);

        res.json(totalHoursPerDay);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    postdata,
    getTotalHours
}