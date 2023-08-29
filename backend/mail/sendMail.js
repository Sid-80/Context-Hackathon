require('dotenv').config();

const nodemailer = require('nodemailer');
const fs = require("fs");

const transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.port,
    secure: process.env.secure,
    auth: {
        user: process.env.smtpUsername,
        pass: process.env.pass
    }
});


//read html file
const htmlTemplate = fs.readFileSync(__dirname + '/mailtemplate.html', "utf-8");


//replace
// var recipient = "Abhi Fadake"
// var testParameter = "Test parameter"

const sendMail = (toEmail, title, recipientName, testParameter) => {
    var customizedHtml = htmlTemplate
        .replace("{{recipientName}}", recipientName)
        .replace("{{testParameter}}", testParameter)


    var mailOptions = {
        from: process.env.smtpFrom,
        to: toEmail,
        subject: title,
        html: customizedHtml
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}





module.exports = {sendMail}