const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String, min: 6 }
})

const User = mongoose.model('User', UserSchema)
User.save()
module.exports = User