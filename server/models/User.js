import mongoose from 'mongoose'

/*const UserSchema = new mongoose.Schema({
    username:{type: String, required:true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required :true, unique: true}
})*/
const UserSchema = new mongoose.Schema({
    name:String,
    Email:String,
    Password:String,
    Age:Number
})

const UserModel = mongoose.model("collection 1",UserSchema)


module.exports = UserModel