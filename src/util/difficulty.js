const jsonfile = require('jsonfile');
const _ = require('lodash');

const path = '../data/';
const file = path + 'food.json';
const destFile = path + 'food_difficulty.json';

const cookList = jsonfile.readFileSync(file);
let res = {};


_.forEach(cookList , (r,key) => {

    const length = r.process.length;
    let difficulty;

    difficulty = '상';
    if(length < 7)
        difficulty = '중';
    if(length <= 3)
        difficulty = '하';

    r['difficulty'] = difficulty;

    res[key] = r;

});

console.log(res);
jsonfile.writeFileSync(destFile,res);
