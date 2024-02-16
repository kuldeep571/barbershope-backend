const db = require("../Models/SuppliersModel");

const postdata = async (req, res) => {
    try {
        const createsupplier = await db.create(req.body);
        res.status(201).json(createsupplier);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

const getsuppliers = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json(findalldata);
    } catch (error) {
        console.error(error);
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
        const deletedata = await db.deleteOne({ _id: req.params.id })
        res.status(200).json(deletedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const update = async (req, res) => {
    try {
        const {
            name,
            email,
            contact,
            telephone,
        } = req.body;
        const updatesupplier = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    name,
                    email,
                    contact,
                    telephone,
                },
            },
            { new: true }
        );
        res.status(200).json(updatesupplier)

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    postdata,
    getsuppliers,
    getsingle,
    deleteone,
    update
}