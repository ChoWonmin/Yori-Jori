const jsonfile = require('jsonfile');
const file = 'src/data/food_origin.json';
const downloadPath = 'public/images/';

const _ = require('lodash');
const download = require('image-downloader')

const cookList = jsonfile.readFileSync(file);

const downloadFile = function (url , path , name) {
    let options = {
        url: url,
        dest: path + name
    }

    download.image(options)
        .then(({ filename, image }) => {
            console.log('File saved to', filename)
        }).catch((err) => {
        throw err
    })
}

// main 이미지 다운로드
_.forEach(cookList , cook => {
    const url = cook.mainImageLink;
    const path = downloadPath+'main/';
    const fileName = cook.id+'.jpg';

    downloadFile(url, path, fileName);
});


// 요리과정 이미지 다운로드
_.forEach(cookList , cook => {
    const process = cook.processImageLink;

    for(var i = 0 ; i < process.length ; i++){
        const url = process[i];
        const path = downloadPath+'process/';
        const fileName = cook.id+ '_'+(i+1) +'.jpg';

        console.log(i , cook.id);

        downloadFile(url, path, fileName);
    }

});

