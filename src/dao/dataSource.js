/**
 * Created by zhanghao on 2016/10/19.
 */
var AV = require('leanengine');

AV.init({
    appId: process.env.LEANCLOUD_APP_ID || 'zaeoJsvpr1Do7ufp9D8Ci0BH-gzGzoHsz',
    appKey: process.env.LEANCLOUD_APP_KEY || 'dSM3xn9gnWi0rO02XzNsRVSe',
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'z0zHlnD9RtPdN1Q7dMi2kISy'
});

exports.DB = AV;

