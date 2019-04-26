const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Database Connection
const db = mongoose.connect("mongodb://localhost:27017/testcli", { useNewUrlParser: true });

const User = require('./models/user');

//Add User

const addUser = (user) => {
    User.create(user).then(user => {
        console.info('New User Added');
    });
}

//Export

module.exports = {
    addUser,
}
