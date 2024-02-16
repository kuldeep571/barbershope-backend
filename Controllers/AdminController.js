const adminmodel = require('../Models/AdminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const createadmin = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newuser = await adminmodel.create({
            email,
            password: hashedPassword,
            role,
        })
        res.status(201).json(newuser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await adminmodel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };

        const token = jwt.sign(payload, process.env.SECRET_DATAKEY, { expiresIn: process.env.EXPIRETIMEIN });
        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { createadmin, adminlogin};
