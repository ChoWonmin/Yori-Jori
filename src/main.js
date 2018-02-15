console.log('main');

const main = new async function () {

    const cookList = await Util.loadJson(FOOD_JSON);
    
    console.log(cookList);

    _.forEach(cookList , (cook , i ) =>{
        const $cookList = $('.cookList');

        $(`<div class="cookItem">
             <img class="image" src="${MAIN_IMAGE_PATH+cook.id+'.jpg'}">
             <div class="text">
                <div class="name">${cook.name}</div>
                <div class="ingredient">${cook.ingredient_main}</div>
             </div>
           </div>`).appendTo($cookList);
    });
    

};
