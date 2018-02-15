'use strict';

var jsonfile = require('jsonfile');
var file = 'src/data/food_origin.json';
var downloadPath = 'public/images/';

var _ = require('lodash');
var download = require('image-downloader');

var cookList = jsonfile.readFileSync(file);

var downloadFile = function downloadFile(url, path, name) {
    var options = {
        url: url,
        dest: path + name
    };

    download.image(options).then(function (_ref) {
        var filename = _ref.filename,
            image = _ref.image;

        console.log('File saved to', filename);
    }).catch(function (err) {
        throw err;
    });
};

// main 이미지 다운로드
_.forEach(cookList, function (cook) {
    var url = cook.mainImageLink;
    var path = downloadPath + 'main/';
    var fileName = cook.id + '.jpg';

    downloadFile(url, path, fileName);
});

// 요리과정 이미지 다운로드
_.forEach(cookList, function (cook) {
    var process = cook.processImageLink;

    for (var i = 0; i < process.length; i++) {
        var url = process[i];
        var path = downloadPath + 'process/';
        var fileName = cook.id + '_' + (i + 1) + '.jpg';

        console.log(i, cook.id);

        downloadFile(url, path, fileName);
    }
});