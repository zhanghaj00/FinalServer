/**
 * Created by zhanghao on 2016/10/19.
 */
var dataSource = require('../dao/dataSource');

var DB = dataSource.DB;

var userDB = DB.User;

var userDao = function(){};

userDao.prototype.login = function(obj,callback){
    var username = obj.username;
    var password = obj.password;
    userDB.logIn(username, password).then(function (loginedUser) {
        console.log(loginedUser.getUsername());
        callback(null,loginedUser.getUsername())
    }, function (error) {
        callback(error)
    });
}

module.exports = new userDao();
