const User = require('../models/User')

class UserController {

    get_all(req, res) {
        return res.send('hello')
    }

    create(req, res) {
        const {email, password} = req.body
        const candidate = new User({
            email: email,
            password: password
        })
        candidate.create()
    }

    delete(req, res) {

    }
}

module.exports = new UserController()