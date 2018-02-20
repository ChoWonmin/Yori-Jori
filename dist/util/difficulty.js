'use strict';

var jsonfile = require('jsonfile');
var _ = require('lodash');

var path = '../data/';
var file = path + 'food.json';
var destFile = path + 'food_difficulty.json';

var cookList = jsonfile.readFileSync(file);
var res = {};

_.forEach(cookList, function (r, key) {

    var length = r.process.length;
    var difficulty = void 0;

    difficulty = '상';
    if (length < 7) difficulty = '중';
    if (length <= 3) difficulty = '하';

    r['difficulty'] = difficulty;

    res[key] = r;
});

console.log(res);
jsonfile.writeFileSync(destFile, res);