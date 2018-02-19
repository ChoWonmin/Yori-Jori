const main = new function () {

    const that = this;

    let cookList;
    let currentList;

    this.init = async function () {
        cookList = await Util.loadJson(FOOD_JSON);
        currentList = cookList;

        console.log(cookList);

        that.drawCookList(cookList);
        that.addModal();

        that.addSearchAction();

    }

    this.drawCookList = function (list) {
        const $cookList = $('.cookList');

        $cookList.children('*').remove();

        _.forEach(list, (cook, i) => {

            $(`<div class="cookItem" cookId="${cook.id}">
             <img class="image" src="${MAIN_IMAGE_PATH + cook.id + '.jpg'}">
             <div class="text">
                <div class="name">${cook.name}</div>
                <div class="ingredient">${cook.ingredient_main}</div>
             </div>
           </div>`).appendTo($cookList);
        });
    }

    this.addModal = function () {
        const $cookItem = $('.cookItem');
        $cookItem.click(function () {
            const id = $(this).attr('cookId');

            $('body').css('overflow','hidden');
            $('.cookModal-container').css('display', 'block');
            $('.cookModal').load('/cook?id=' + id);

        });

        $('.close-btn').click(function () {
            $('body').css('overflow','auto');
            $('.cookModal-container').css('display', 'none');
            $('.cookModal').children('*').remove();
        });
    }

    this.searchByName = function (list , word) {
        const temp = _.filter(list , v => v.name.indexOf(word) !== -1);

        list = {};
        _.forEach(temp , t => list[t.id] = t);
        console.log(list);

        return list;
    }

    this.addSearchAction = function () {
        console.log('add SearchAction');

        const $searchBar = $('.search_bar_input');

        $searchBar.keyup(function () {
            const word = $searchBar.val();

            const tmp = that.searchByName(currentList, word);

            that.drawCookList(tmp);
            that.addModal();
        });
    }

};
main.init();


