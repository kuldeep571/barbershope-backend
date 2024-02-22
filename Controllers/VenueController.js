const db = require("../Models/VenueModel");
const postdata = async (req, res) => {
    try {
        const {
            phoneno,
            email,
            website,
            openinghours,
        } = req.body;
        const createvenue = await db.create({
            phoneno,
            email,
            website,
            openinghours,
        });
        res.status(201).json(createvenue);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getvenue = async (req, res) => {
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
            phoneno,                                                          
            email,
            website,
            openinghours,
        } = req.body;

        const updateService = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    phoneno,
                    email,
                    website,
                    openinghours,
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
    getvenue,
    getsingle,
    deleteone,
    update
}