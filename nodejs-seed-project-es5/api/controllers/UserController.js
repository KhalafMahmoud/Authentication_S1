var User = module.exports = mongoose.model('User', userSchema);

var mongoose = require('mongoose'),
moment = require('moment'),
Validations = require('../utils/Validations'),
User = mongoose.model('User');

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