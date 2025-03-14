const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createEvent);
router.get('/', auth, getEvents);

module.exports = router;
