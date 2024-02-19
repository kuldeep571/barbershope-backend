const db = require("../Models/EmployeesModel");

const postdata = async (req, res) => {
    try {
        // const img = req.uploadedImageUrl;
        const createdData = await db.create(req.body);
        res.status(200).json(createdData);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

const getemployees = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json(findalldata);
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
            phone,
            images,
            services,
            monworkinghours,
            tueworkinghours,
            wedworkinghours,
            thuworkinghours,
            friworkinghours,
            satworkinghours,
            sunworkinghours,
            joiningdate,
            mon2workinghours,
            tue2workinghours,
            wed2workinghours,
            thu2workinghours,
            fri2workinghours,
            sat2workinghours,
            sun2workinghours,
        } = req.body;
        // const img = req.uploadedImageUrl
        const updateemployee = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    name,
                    email,
                    phone,
                    images,
                    services,
                    monworkinghours,
                    tueworkinghours,
                    wedworkinghours,
                    thuworkinghours,
                    friworkinghours,
                    satworkinghours,
                    sunworkinghours,
                    joiningdate,
                    mon2workinghours,
                    tue2workinghours,
                    wed2workinghours,
                    thu2workinghours,
                    fri2workinghours,
                    sat2workinghours,
                    sun2workinghours,
                },
            },
            { new: true }
        );
        res.status(200).json(updateemployee)

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    postdata,
    getemployees,
    getsingle,
    deleteone,
    update
}