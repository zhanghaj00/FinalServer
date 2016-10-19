/**
 * Created by zhanghao on 2016/10/19.
 */

exports.resultToJson = function(results){

    if(typeof  results === undefined || results.length === 0){
        return [];
    }
    var newResult = [];
    results.forEach(function(item){
        item.attributes.id = item.id;
        newResult.push(item.attributes);
    });
    return newResult;
}



