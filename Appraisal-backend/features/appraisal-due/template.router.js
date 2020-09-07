const express = require('express')
const templateController = require('./template.controller')
const router = express.Router()

router.get('/add',templateController.addtemplate)
router.get('/',templateController.getTemplateList)

module.exports = router