const jsonfile = require('jsonfile');
const _ = require('lodash');

const path = '../data/';
const file = path + 'food_origin.json';
const destFile = path + 'food.json';


const cookList = jsonfile.readFileSync(file);
let res = {};

_.forEach(cookList , (cook,i)=>{
    const id = cook.id;
    res[id] = cook;
});


console.log(res);
jsonfile.writeFileSync(destFile,res);

