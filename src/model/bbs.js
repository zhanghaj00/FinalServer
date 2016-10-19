/**
 * Created by zhanghao on 2016/10/19.
 */

var dataSource = require('../dao/dataSource');
var resultTool = require("../util/avResultTool");

var DB = dataSource.DB;

// title:String,
// createId:String,
// content:String,
// type: Number,
// view: Number,
// post: Number

var bbs = DB.Object.extend('BBS');

var bbsDao = function(){};

bbsDao.prototype.save = function(obj,callback){
    var instance = new bbs(obj);
    instance.save().then(function(results){
        callback(null,resultTool.resultToJson(results));
    },function(err){
        callback(err);
    });
};

bbsDao.prototype.pageBbs = function(obj,callback) {
    var page = obj.page;
    var rows = obj.rows;
    var type = obj.type;
    console.log('query:'+page +';'+rows+';'+type);
    var query =  new DB.Query('BBS');
    query.skip((page - 1) * rows);
    query.limit(rows);
    query.equalTo('type', type);
    returnValue(query,callback);
}


function returnValue(query,callback){
    query.find().then(function(results){
        callback(null,resultTool.resultToJson(results));
    },function(err){
        callback(err);
    })
}

module.exports = new bbsDao();