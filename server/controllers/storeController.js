const express = require('express');
const storeService = require('../services/storeService');
let router = express.Router();

router.post('/registration', storeService.registration);

module.exports = router;