const express = require("express");
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/user', UserController.get_all)
router.post('/user/create', UserController.create)
router.get('/user/delete', UserController.delete)

module.exports = router

