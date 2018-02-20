const jsonfile = require('jsonfile');
const _ = require('lodash');

const path = '../data/';
const file = path + 'food.json';
const destFile = path + 'food_slice.json';

const cookList = jsonfile.readFileSync(file);
let res = {};

_.forEach(cookList , (cook,key) => {
    let tmpArr = [];
    _.forEach(cook.process, process => {

        const tmp = process.slice( process.indexOf('.') + 1 , process.length );
        tmpArr.push(tmp);

        //console.log(tmpArr);
    });

    cook['process'] = tmpArr;

});

console.log(cookList['10001155']);
jsonfile.writeFileSync(destFile,cookList);
