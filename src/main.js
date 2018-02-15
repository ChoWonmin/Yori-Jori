console.log('main');

const main = new async function () {

    let cookList = await Util.loadJson(FOOD_JSON);

    _.forEach(cookList, (cook, i) => {
        const $cookList = $('.cookList');

        if (i < 10000060)
            $(`<div class="cookItem" cookId="${cook.id}">
             <img class="image" src="${MAIN_IMAGE_PATH + cook.id + '.jpg'}">
             <div class="text">
                <div class="name">${cook.name}</div>
                <div class="ingredient">${cook.ingredient_main}</div>
             </div>
           </div>`).appendTo($cookList);
    });

    const $cookItem = $('.cookItem');
    $cookItem.click(function () {
        const id = $(this).attr('cookId');

        $('.cookModal-container').css('display','block');
        $('.cookModal').load('/cook?id='+id);
    });

    $('.close-btn').click(function () {
        $('.cookModal-container').css('display','none');
    });

};
