console.log('main');

const main = new async function () {

    const cookList = await Util.loadJson('/data/food_origin.json');

    console.log(cookList);

    return;

    _.forEach(cookList , (cook , i ) =>{
        const $cookList = $('.cookList');

        $(`<div class="cookItem">
             <img class="image" src="${cook.mainImageLink}">
             <div class="text">${cook.name}</div>
           </div>`).appendTo($cookList);

    });

};
