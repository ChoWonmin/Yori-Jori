'use strict';

var jsonfile = require('jsonfile');
var _ = require('lodash');

var path = '../data/';
var file = path + 'food.json';
var destFile = path + 'food_splice.json';

var cookList = jsonfile.readFileSync(file);
var res = {};

_.forEach(cookList, function (cook, key) {
    var tmpArr = [];
    _.forEach(cook.process, function (process) {

        var tmp = process.slice(process.indexOf('.') + 1, process.length);
        tmpArr.push(tmp);

        //console.log(tmpArr);
    });

    cook['process'] = tmpArr;
});

console.log(cookList['10001155']);
jsonfile.writeFileSync(destFile, cookList);