const db = require("../Models/ClientModel");
// const bcrypt = require('bcrypt')

const postdata = async (req, res) => {
    try {
        const {
            fullname,
            phone,
            email,
            marketingCommunication,
            paymentRequired,
            // password,
            gender,
            monthOfBirth,
            note
        } = req.body;
        console.log(req.body, "data")
        const existingSupplier = await db.findOne({ email });
        if (existingSupplier) {
            return res.status(400).json({
                success: false,
                message: "Email already exists in the database"
            });
        }
        else {
            // const hashedPassword = await bcrypt.hash(password, 10);
            const newClient = await db.create({
                fullname,
                phone,
                email,
                marketingCommunication,
                paymentRequired,
                // password: hashedPassword,
                gender,
                monthOfBirth,
                note
            });
            res.status(201).json({
                success: true,
                ClientData: newClient,
                message: "Client created successfully",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getclient = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get All Client Data",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getsingle = async (req, res) => {
    try {
        const findsingle = await db.findOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            findsingle,
            message: "Get Single Client Data"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const deleteone = async (req, res) => {
    try {
        await db.deleteOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            message: "Delete Client Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const update = async (req, res) => {
    try {
        const {
            fullname,
            phone,
            email,
            marketingCommunication,
            paymentRequired,
            password,
            gender,
            monthOfBirth,
            note
        } = req.body;

        const updatesupplier = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    fullname,
                    phone,
                    email,
                    marketingCommunication,
                    paymentRequired,
                    password,
                    gender,
                    monthOfBirth,
                    note
                },
            },
            { new: true }
        );

        if (!updatesupplier) {
            res.status(400).json({
                success: false,
                message: "Client not found for update"
            })
        }

        res.status(200).json({
            success: true,
            updatesupplier,
            message: "Client update successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = {
    postdata,
    getclient,
    getsingle,
    deleteone,
    update
}

