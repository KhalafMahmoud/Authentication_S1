var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/DBConnection');

//user schema
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    }
});
var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUSerNameByID = function(id, callback){
    User.findById(id, callback);
}
module.exports.getUSerNameByUsername = function(username, callback){
    var query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUSer.password, salt, (err, hash) => {
            if(err) throw err;
            newUSer.password = hash;
            newUser.save(callback);
        });
    });
}
modules.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });

}

