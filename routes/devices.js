const express = require('express');

const router = express.Router();

const devicesController = require('../controllers/devices');
const verifyLoggedInUser = require('../lib/verifyLoggedInUser');

router.use(verifyLoggedInUser);
router.post('/', devicesController.create);

module.exports = router;
