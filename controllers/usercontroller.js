const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UniqueConstraintError } = require('sequelize/lib/errors');

//WORKING
/* REGISTER */
router.post('/register', async (req, res) => {
    let { username, email, password } = req.body.User;

    try {
        const newUser = await User.create({
            username,
            email,
            password: bcrypt.hashSync(password, 13)
        })
        res.status(201).json({
            message: 'User registered',
            user: newUser
        })
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            res.status(409).json({
                message: 'Email already in use.'
            })
        } else {
            res.status(500).json({
                error: 'Failed to register user.'
            })
        }
    }
});

//WORKING
/* LOGIN */
router.post('/login', async (req, res) => {
    let { email, password } = req.body.User;

    try {
        let loginUser = await User.findOne({
            where: { email }
        })
        // console.log('loginUser', loginUser)

        if (loginUser && await bcrypt.compare(password, loginUser.password)) {

            const token = jwt.sign({ id: loginUser.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

            res.status(200).json({
                message: "Login Succeeded!",
                user: loginUser,
                token
            })
        }
        else {
            res.status(401).json({
                message: 'Login Failed: User information incorrect.'
            })
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error loggin in!'
        })
    }
})

module.exports = router;