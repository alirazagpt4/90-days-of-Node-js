import nodemailer from "nodemailer";
import eventEmitter from "./eventEmitter";

eventEmitter.on("userRegistered" , async({username , email}) =>{
         console.log(`Preparing for emails ${username}`)

         const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"infoaliraza22@gmail.com",
                pass:"smkj wlwd uidq qswk"

            }
         });

         const mailOptions = {
            from: "infoaliraza22@gmail.com",
            to: email,
            subject: "Welcome to our service",
            text: `Hello ${username}, welcome to our service!`
         };


         try{
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${email}`);
         }
         catch(err){
            console.log("Error sending email", err);
         }
});




// smkj wlwd uidq qswk