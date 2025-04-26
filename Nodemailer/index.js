const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Nodemailer API'
    });
});

app.post('/send-mail' , async (req , res)=>{
     
    const { to , subject , text} = req.body;

    try {
        // create transporter
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'infoaliraza22@gmail.com',
                pass:'wbuy kbox zjvl ezzq'
            }
        });



        // define mail options
        const mailOptions = {
            from:'infoaliraza22@gmail.com',
            to: to,
            subject: subject,
            text: text
        };


        // send mail
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent' , info.response);
        res.status(200).json({
            message: 'Email sent successfully',
            info: info.response
        });


        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

