/**
 * Created by zhanghao on 2016/10/19.
 */

exports.authUser = function(req,res){
    if(req.session.user === undefined){
        res.redirect("/");
        return false;
    }
}
