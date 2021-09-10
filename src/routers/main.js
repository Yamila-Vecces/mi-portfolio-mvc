const router = require('express').Router()
const path = require('path');
const { home } = require('../controllers/mainController.js')

router.get('/', home)

module.exports = router;