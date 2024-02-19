const db = require("../Models/ImportFilesModel");

const postdata = async (req, res, next) => {
    console.log(req.file); 
    res.send("uploaded successfully");
  }


const getimport = async (req, res) => {
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


const deletedata = async (req, res) => {
    try {
        const deletedata = await db.deleteOne({ _id: req.params.id })
        res.status(200).json(deletedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            fileDetails
        } = req.body

        const csvfile = req.uploadedCsvUrl
        const update = await db.upadteMany(
            { _id: req.params.id },
            {
                $set: {
                    fileDetails,
                    uploadFile: csvfile,
                }
            },
            {new: true}
        );
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json(error.message)
    }
};

module.exports = {
    postdata,
    getimport,
    getsingle,
    deletedata,
    updatedata
}