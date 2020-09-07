const express = require('express')
const userController = require('./user.controller')
const router = express.Router()
router.get('/checkuser', userController.checkuserstatus)

module.exports = router