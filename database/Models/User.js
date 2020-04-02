const mongoose = require('../connection')

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },

    password: {
        type: String,
        require: true,
    },

    address: {
        type: String,
        require: true,
    },

    address2: {
        type: String,
        require: true,
    },

    district: {
        type: String,
        require: true,
    },

    city: {
        type: String,
        require: true,
    },

    uf: {
        type: String,
        require: true,
    },

    cep: {
        type: Number,
        require: true,
    },

    symptoms: {
        type: [String],
    },

    groups: {
        type: [String],
    },

    result: {
        type: Boolean
    }

}, {
    timestamps: true,
    versionKey: false
})

const User = mongoose.model('User', UserSchema, 'users')

module.exports = User