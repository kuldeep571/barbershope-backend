const db = require('../Models/PackageModel');
const validateMongoDbId = require('../utils/validateMongodbId');
const postdata = async (req, res) => {
    try {
        const {
            packageName,
            discount,
            selectPackageService,
            sellingPrice,
            description,
            limitations,
            usefulInformation,
            soldOnline,
            servicePerformed,
            registrationEarlier
        } = req.body;

        if (!packageName || !discount || !selectPackageService || !sellingPrice || !description || !limitations || !usefulInformation || !soldOnline || !servicePerformed || !registrationEarlier) {
            res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        } else {
            const packagedata = await db.create({

                packageName,
                discount,
                selectPackageService,
                sellingPrice,
                description,
                limitations,
                usefulInformation,
                soldOnline,
                servicePerformed,
                registrationEarlier
            })
            res.status(201).json({
                success: true,
                message: "Package Created Successfully",
                packagedata
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get All Package Data"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getsingle = async (req, res) => {
    try {
        const { id } = req.params
        validateMongoDbId(id)
        const findsingledata = await db.findById(id);
        res.status(200).json({
            success: true,
            findsingledata,
            message: "Get Package Single Data"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const deletedata = async (req, res) => {
    try {
        await db.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: "Delete Package Success"
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
            packageName,
            discount,
            selectPackageService,
            sellingPrice,
            description,
            limitations,
            usefulInformation,
            soldOnline,
            servicePerformed,
            registrationEarlier
        } = req.body;

        // if (!productName || !unitePrice || !quantityInStock || !availableQuantity) {
        //     res.status(400).json({
        //         success: false,
        //         message: "All Filed Require"
        //     })
        // }

        const updatedata = await findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    packageName,
                    discount,
                    selectPackageService,
                    sellingPrice,
                    description,
                    limitations,
                    usefulInformation,
                    soldOnline,
                    servicePerformed,
                    registrationEarlier
                },
            },
            { new: true },
        )
        res.status(200).json({
            success: true,
            updatedata,
            message: "Update Package Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    updatedata
}