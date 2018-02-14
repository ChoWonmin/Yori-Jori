'use strict';

var jsonfile = require('jsonfile');
var file = 'src/data/food.json';

var _ = require('lodash');
var download = require('image-downloader');

var cookList = jsonfile.readFileSync(file);

_.forEach(cookList, function (cook) {
    console.log(cook);
});

var downloadFileName = 'hello.jpg';

var options = {
    url: 'http://dthumb.phinf.naver.net/?src=%22http%3A%2F%2Fdbscthumb.phinf.naver.net%2F2756_000_1%2F20131107230809267_1OB3R4APH.jpg%2F451_i1.jpg%3Ftype%3Dw690_fst_n%26wm%3DY%22&twidth=670&theight=500&opts=17',
    dest: 'test/' + downloadFileName
};

download.image(options).then(function (_ref) {
    var filename = _ref.filename,
        image = _ref.image;

    console.log(filename);
    console.log('File saved to', filename);
}).catch(function (err) {
    throw err;
});