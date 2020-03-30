const mongoose = require('../database/connection')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    
    contact: {
        type: String
    }

}, {
    timestamps: true,
    versionKey: false 
})

const User = mongoose.model('User', UserSchema, 'users')

module.exports = User