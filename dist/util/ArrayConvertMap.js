'use strict';

var jsonfile = require('jsonfile');
var _ = require('lodash');

var path = '../data/';
var file = path + 'food_origin.json';
var destFile = path + 'food.json';

var cookList = jsonfile.readFileSync(file);
var res = {};

_.forEach(cookList, function (cook, i) {
    var id = cook.id;
    res[id] = cook;
});

console.log(res);
jsonfile.writeFileSync(destFile, res);