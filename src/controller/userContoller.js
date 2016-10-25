/**
 * Created by zhanghao on 2016/10/19.
 */
/**
 * Created by zhanghao on 2016/10/19.
 */

var userDao = require('../model/user');

exports.doLogin = function(req,res){
    var user = req.body;
    console.log('user'+user);
    console.log('user'+user.username);
    console.log('user'+user.password);
    userDao.login(user,function(err,username){
        if(err){
            res.json({'result':err,'code':1});
        }else{
            req.session.user = username;
            res.json({'result':'login success','code':0});
        }
    })
};