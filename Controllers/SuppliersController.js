const db = require("../Models/SuppliersModel");

const postdata = async (req, res) => {
    try {
        const { supplierName, contactPerson, telephoneNo, email, assignedProduct } = req.body;

        const existingSupplier = await db.findOne({ email });
        if (existingSupplier) {
            return res.status(400).json({
                success: false,
                message: "Email already exists in the database"
            });
        }

        if (!supplierName || !contactPerson || !telephoneNo || !email || !assignedProduct) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"

            });
        } else {
            const newSupplier = await db.create({
                supplierName,
                contactPerson,
                telephoneNo,
                email,
                assignedProduct,
            });

            res.status(201).json({
                success: true,
                SupplierData: newSupplier,
                message: "Supplier created successfully",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getsuppliers = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json({
            success: true,
            findalldata,
            message: "Get all suppliers data",
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
            message: "Get single suppliers data"
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
            message: "Delete suppliers success"
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
            supplierName,
            contactPerson,
            telephoneNo,
            email
        } = req.body;

        if (!supplierName || !contactPerson || !telephoneNo || !email) {
            res.json(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const updatesupplier = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    supplierName,
                    contactPerson,
                    telephoneNo,
                    email
                },
            },
            { new: true }
        );

        if (!updatesupplier) {
            res.status(400).json({
                success: false,
                message: "Supplier not found for update"
            })
        }

        const productCount = await Product.countDocuments({ supplierId: req.params.id });

        res.status(200).json({
            success: true,
            updatesupplier,
            productCount,
            message: "Supplier update successfully"
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
    getsuppliers,
    getsingle,
    deleteone,
    update
}

