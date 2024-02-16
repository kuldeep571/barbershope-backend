const db = require("../Models/ClientModel");
const postdata = async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            gender,
            birth,
            note
        } = req.body;

        const existingClient = await db.findOne({ email });
        if (existingClient) {
            return res.status(400).json({
                success: false,
                message: "Email already exists in the database"
            });
        }
        else {
            const createclient = await db.create({
                name,
                phone,
                email,
                gender,
                birth,
                note
            });
            res.status(201).json(createclient);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getclient = async (req, res) => {
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
            phone,
            email,
            gender,
            birth,
            note
        } = req.body;

        const updateclient = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    name,
                    phone,
                    email,
                    gender,
                    birth,
                    note
                },
            },
            { new: true }
        );
        res.status(200).json(updateclient)

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    postdata,
    getclient,
    getsingle,
    deleteone,
    update
}