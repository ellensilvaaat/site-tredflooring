const express = require('express');
const router = express.Router();
const { submitContact, submitSample } = require('../controllers/formController');

router.post('/contact', submitContact);
router.post('/sample', submitSample);

module.exports = router;
