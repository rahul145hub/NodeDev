const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/user');

router.route('/').post(uploadFile);

module.exports = router;