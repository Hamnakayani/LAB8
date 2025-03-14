const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Event = require('../models/eventModel');
const User = require('../models/userModel');

cron.schedule('* * * * *', async () => {
    const now = new Date();
    const events = await Event.find({ date: { $gte: now }, reminder: true });

    for (let event of events) {
        const user = await User.findById(event.user);
        if (user) {
            // Send email logic here
            console.log(`Reminder: ${event.name} for ${user.email}`);
        }
    }
});
S