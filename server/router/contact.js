var express = require('express')
var router = express.Router()
const controller = require('../controller/index').contact

router.get('/', controller.allData)

router.post('/', controller.addContact)

router.delete('/:id', controller.deleteContact)

router.put('/:id', controller.editContact)

module.exports = router