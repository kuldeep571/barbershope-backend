const db = require("../Models/UserModel");
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            password,
            contact
        } = req.body;
        if (!firstname || !lastname || !email || !password || !contact) {
            return res.status(400).json("Message : All fields are required");
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email address" });
        }


        const existdata = await db.findOne({ email });
        if (existdata) {
            return res.status(400).json("Message: This Email AllReady Exist")
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newuser = await db.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            contact
        })
        res.status(201).json(newuser);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json("Message: Email and Password Are Required");
        }

        if (!validator.isEmail(email)) {
            res.status(400).json("Message: Invalid Email Address")
        }

        const user = await db.findOne({ email });
        if (!user) {
            res.status(400).json("Message: Invalid Email Or Password");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(400).json("Message: Invalid Password");
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_DATAKEY, { expiresIn: process.env.EXPIRETIMEIN })

        res.status(200).json({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            contact: user.contact,
            token
        });

    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    signup,
    login
}