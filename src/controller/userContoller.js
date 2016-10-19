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

    userDao.login(user,function(err,username){
        if(err){
            res.json({'result':false,'code':err});
        }else{
            req.session.user = username;
            res.json({'result':true,'code':'login success'});
        }
    })
};