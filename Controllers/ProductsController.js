const db = require('../Models/ProductsModel');

const postdata = async (req, res) => {
    try {
        const {
            productName,
            unitePrice,
            quantityInStock,
            availableQuantity
        } = req.body;

        if (!productName || !unitePrice || !availableQuantity) {
            res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        } else {
            const productdata = await db.create({
                productName,
                unitePrice,
                quantityInStock,
                availableQuantity,
            })
            res.status(201).json(productdata);
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json(findalldata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getsingle = async (req, res) => {
    try {
        const findsingledata = await db.findOne({ _id: req.params.id });
        res.status(200).json(findsingledata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deletedata = async (req, res) => {
    try {
        await db.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: "Delete Product Success"
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            productName,
            unitePrice,
            quantityInStock,
            availableQuantity
        } = req.body;

        if (!productName || !unitePrice || !quantityInStock || !availableQuantity) {
            res.status(400).json({
                success: false,
                message: "All Filed Require"
            })
        }
        const updatedata = await findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    productName,
                    unitePrice,
                    quantityInStock,
                    availableQuantity
                },
            },
            { new: true },
        )
        res.status(200).json(updatedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    updatedata
}