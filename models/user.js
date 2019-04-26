const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('User', userSchema);
