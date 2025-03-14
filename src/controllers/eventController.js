const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
    const event = new Event({ ...req.body, user: req.user.id });
    await event.save();
    res.status(201).json(event);
};

exports.getEvents = async (req, res) => {
    const events = await Event.find({ user: req.user.id }).sort('date');
    res.json(events);
};
