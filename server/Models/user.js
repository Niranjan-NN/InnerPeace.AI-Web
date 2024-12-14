const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phno: String,
})


const UserModel = mongoose.model("student", userSchema)
module.exports = UserModel


