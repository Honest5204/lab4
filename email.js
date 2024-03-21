const nodemailer = require('nodemailer');

// Tạo transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nguyentrungthuc555@gmail.com',
        pass: 'etbx eqby czza cinp'
    }
});

// Hàm gửi email
function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'nguyentrungthuc555@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = { sendEmail };
