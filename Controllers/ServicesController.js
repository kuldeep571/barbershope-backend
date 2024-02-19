const db = require("../Models/ServicesModel");
const postdata = async (req, res) => {
    try {
        const {
            title,
            discount,
            team,
            duration,
            price,
            saleprice,
            cleanupTime,
            description,
            finePrint,
            distribution
        } = req.body;
        const creatServices = await db.create({
            title,
            discount,
            team,
            duration,
            price,
            saleprice,
            cleanupTime,
            description,
            finePrint,
            distribution
        });
        res.status(201).json(creatServices);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getservices = async (req, res) => {
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
            title,
            discount,
            team,
            duration,
            price,
            saleprice,
            cleanupTime,
            description,
            finePrint,
            distribution
        } = req.body;

        const updateService = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title,
                    discount,
                    team,
                    duration,
                    price,
                    saleprice,
                    cleanupTime,
                    description,
                    finePrint,
                    distribution
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
    getservices,
    getsingle,
    deleteone,
    update
}