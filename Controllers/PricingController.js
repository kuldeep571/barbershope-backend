const db = require("../Models/PricingModel");
const postdata = async (req, res) => {
    try {
        const {
            name,
            assignedTeamMembers,
        } = req.body;
        const createpricinglevel = await db.create({
            name,
            assignedTeamMembers,
        });
        res.status(201).json(createpricinglevel);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getpricing = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json(findalldata);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getsingle = async (req, res) => {
    try {
        const findsingle = await db.findOne({ _id: req.params.id })
        res.status(200).json(findsingle)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deleteone = async (req, res) => {
    try {
        const deleteclient = await db.deleteOne({ _id: req.params.id })
        res.status(200).json(deleteclient)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const update = async (req, res) => {
    try {
        const {
            name,
            assignedTeamMembers,
        } = req.body;

        const updateService = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    name,
                    assignedTeamMembers,
                },
            },
            { new: true }
        );
        res.status(200).json(updateService)

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    postdata,
    getpricing,
    getsingle,
    deleteone,
    update
}