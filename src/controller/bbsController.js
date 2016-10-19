/**
 * Created by zhanghao on 2016/10/19.
 */

var bbsDao = require('../model/bbs');



exports.dobbsTitleSave = function(req,res,next){
    var json = req.body;

    console.log('save bbs '+json);

    bbsDao.save(json,function(err,commont){
        if(err){
            res.json({'result':false,'code':"insert error "});
        }else{
            res.json({'result':true,'code':'insert success'});
        }
    })


};

exports.dobbsPageQuery = function(req,res){
    var obj = req.query;
    bbsDao.pageBbs(obj,function(err,obj1){
        res.json({'code':true,'result':obj1})
    })

}