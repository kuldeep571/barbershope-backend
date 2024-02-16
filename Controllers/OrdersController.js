const Order = require('../Models/OrdersModel');

const Addorder = async (req, res) => {
    try {
        const {
            supplier,
            orderOfDate,
            unitsOrder,
            condition
        } = req.body;
        const orderData = await Order.create({
            supplier,
            orderOfDate,
            unitsOrder,
            condition
        });
        res.status(201).json(orderData);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

const Getorder = async (req, res) => {
    try {
        const findData = await Order.find();
        res.status(200).json(findData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const GetSingleOrder = async (req, res) => {
    try {
        const findsingledata = await Order.findOne({ _id: req.params.id });
        res.status(200).json(findsingledata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const DeleteOrder = async (req, res) => {
    try {
        const deletedata = await Order.deleteOne({ _id: req.params.id })
        res.status(200).json(deletedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            supplier,
            orderOfDate,
            unitsOrder,
            condition
        } = req.body;
        const updateorder = await Order.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    supplier,
                    orderOfDate,
                    unitsOrder,
                    condition
                },
            },
            { new: true }
        )
        res.status(200).json(updateorder)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    Addorder,
    Getorder,
    GetSingleOrder,
    DeleteOrder,
    updatedata
}