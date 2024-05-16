import express from 'express'
import bcryt from 'bcrypt'
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
import nodemailer from 'nodemailer'
const router = express.Router();


router.post('/signup',async (req,res) => {
    const {username, email, password} = req.body;
    const user = await User.findOne({email})
    if(user) {
        return res.json({message:'user already existed'})
    }
    const hashpassword = await bcryt.hash(password,10)
    const newUser = new User({
        username,
        email,
        password: hashpassword,
    })

    await newUser.save()
    return req.json({status: true, message: "record has been registerd"})
})

router.post('/login',async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) {
        return res.json({message:'user is not registered'})
    }

    const validpassword = await bcryt.compare(password,user.password)
    if(!validpassword) {
        return res.json({message:"password is incorrect"})
    }
    const token = jwt.sign({username: user.username}, process.env.KEY,{expiresIn: '1h'})
    res.cookie('token',token, {httpOnly: true,maxAge: 360000})
    return res.json({status: true, message:"logein successfully"})
    
})

router.post('/forgot-password', async (req,res) =>{
    const {email} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.json({mesage: "user not registered"})
        }
        const token = jwt.sign({id: user_id}, process.env.KEY, {expiresIn: '5m'})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'youremail@gmail.com',
              pass: 'yourpassword'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Reset Password',
            text: `http://localhost:5173/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return res.json({ message: "error sending email"});
            } else {
              return res.json({status: true, message: "email sent"});
            }
          });
    } catch (err) {
        console.log(err)
    }
})

export {router as UserRouter}
/*

    */

