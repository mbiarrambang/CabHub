import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Usermodel from './models/User.js'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'


const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("createuser", (req,res) => {
    Usermodel.create(req.body)
    .then(users => res.json(users))
    .cath(err => res.json(err))
})


app.listen(3001, () => {
    console.log("server is runing")
})















/*const app = express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')

app.listen(process.env.PORT, ()=> {
    console.log("server is running ")
})











})*/