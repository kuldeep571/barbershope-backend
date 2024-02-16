const Order = require('../Models/OrdersModel');

const Addorder = async (req, res) => {
    try {
        const {
            supplierId,
            orderDate,
            unitsOrder,
            condition
        } = req.body;

        if (!orderDate || !unitsOrder) {
            res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        } else {
            const orderData = await Order.create({
                supplierId,
                orderDate,
                unitsOrder,
                condition,
            });

            res.status(201).json({
                success: true,
                message: 'Order Created Successfully',
                data: orderData,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};


const Getorder = async (req, res) => {
    try {
        const findData = await Order.find();
        res.status(200).json({
            success: true,
            message: "Get All Orders",
            Allorders: findData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


const GetSingleOrder = async (req, res) => {
    try {
        const findsingledata = await Order.findOne({ _id: req.params.id }).populate('supplierId');
        res.status(200).json({
            success: true,
            message: "Get SingleOrder Data",
            GetSingleOrder: findsingledata
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const DeleteOrder = async (req, res) => {
    try {
        const deletedata = await Order.deleteOne({ _id: req.params.id })
        res.status(200).json({
            success: true,
            Deletedata: deletedata,
            message: "Delete Order Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


const updatedata = async (req, res) => {
    try {
        const {
            orderDate,
            unitsOrder,
            condition
        } = req.body;
        const update = await Order.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    orderDate,
                    unitsOrder,
                    condition
                },
            },
            { new: true }
        )
        res.status(200).json({
            success: true,
            message: "Order Update Successfully",
            orderupdate: update
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}



module.exports = {
    Addorder,
    Getorder,
    GetSingleOrder,
    DeleteOrder,
    updatedata
}