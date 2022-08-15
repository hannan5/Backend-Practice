const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config()

exports.Sendmail = (()=>{
console.log(process.env.pass,'Email')
const Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    // host: "smtp.gmail.com",
    service:'gmail',
    auth:{
        user:process.env.Email,
        pass:process.env.pass,
    },
    
    // port:3001,
});

const options = {
    from:process.env.Email,
    to:'hannankhan7987@gmail.com',
    subject:'Forget Password',
    text:'Your Code is ',
}

    Transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err,'err')
        }
        else{
            console.log(info.response)
        }
    })  
})