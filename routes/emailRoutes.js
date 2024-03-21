const express = require('express');
const router = express.Router();
const { sendEmail } = require('../email');

router.get('/send-email', (req, res) => {
    const to = 'thucntph34389@fpt.edu.vn';
    const subject = 'Test email';
    const text = 'This is a test email from Nodemailer.';
    sendEmail(to, subject, text);
    res.send('Email sent successfully!');
});

module.exports = router;
