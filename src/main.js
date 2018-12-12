//main.js
const main = new function () {

    const that = this;

    let cookList;
    let OriginalList;
    let tmpList;

    const difficulty_low = $('#d-low');
    const difficulty_mid = $('#d-mid');
    const difficulty_high = $('#d-high');
    const $searchBar = $('.search_bar_input');
    const $timeMinBar = $('#limit_time_min');
    const $timeMaxBar = $('#limit_time_max');
    const $kcalMinBar = $('#limit_kcal_min');
    const $kcalMaxBar = $('#limit_kcal_max');


    let word;
    let timeMin;
    let timeMax;
    let kcalMin;
    let kcalMax;

    this.init = async function () {
        cookList = await Util.loadJson(FOOD_JSON);
        OriginalList = cookList;
        tmpList = OriginalList;


        that.drawCookList(OriginalList);
        that.addModal();
    };


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

        console.log("drawCook Finished! " + Object.keys(list).length);
    }
    this.addModal = function () {
        console.log("addModal Start");
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
        if(word === undefined){
            word = "";
        }
        console.log("searchByName 시작");
        console.log("word: " + word);
        const temp = _.filter(list , v => v.name.indexOf(word) !== -1);

        list = {};
        _.forEach(temp , t => list[t.id] = t);
        console.log(list);
        console.log("search By name recipe: " + Object.keys(list).length);

        return list;
    };

    this.searchByKcal = function (list , min, max) {
        if(min === undefined || min === ""){
            min = "0";
        }

        if(max === undefined || max === ""){
            max = "1267";
        }

        const temp = _.filter(list , v =>
            v.kcal >= parseInt(min) && v.kcal <= parseInt(max));

        list = {};
        _.forEach(temp , t => list[t.id] = t);

        return list;
    };

    this.searchByTime = function (list , min, max) {
        if(min === undefined || min === ""){
            min = "0";
        }

        if(max === undefined || max === ""){
            max = "540";
        }
        console.log("searchByTime 시작");
        console.log("min: " + min + " max: " + max);
        const temp = _.filter(list , v =>
            v.time >= parseInt(min) && v.time <= parseInt(max));

        list = {};
        _.forEach(temp , t => list[t.id] = t);
        console.log(list);
        console.log("search By time recipe: " + Object.keys(list).length);

        return list;
    };

    $searchBar.keyup(async function () {
        console.log("KeyUp start");
        word = await $searchBar.val();
        console.log("KeyUp finish");
        that.updateList();
    });

    $timeMinBar.keyup(async function(){
        console.log("TimeMin KeyUp Start!");
        timeMin = await $timeMinBar.val();
        console.log("TimeMin KeyUp Finish!");
        that.updateList();
    })

    $timeMaxBar.keyup(async function(){
        console.log("TimeMax KeyUp Start!");
        timeMax= await $timeMaxBar.val();
        console.log("TimeMax KeyUp Finish!");
        that.updateList();
    })

    $kcalMinBar.keyup(async function(){
        console.log("kcalMin KeyUp Start!");
        kcalMin = await $kcalMinBar.val();
        console.log("kcalMin KeyUp Finish!");
        that.updateList();
    })

    $kcalMaxBar.keyup(async function(){
        console.log("kcalMax KeyUp Start!");
        kcalMax = await $kcalMaxBar.val();
        console.log("kcalMax KeyUp Finish!");
        that.updateList();
    })

    this.filter_difficulty = function(list){

        var status = 1;

        if(difficulty_low.attr("value") === "checked"){
            status *= 2;
        }
        else{
            console.log("체크 X. d-low");
        }

        if(difficulty_mid.attr("value") === "checked"){
            status *= 3;
        }
        else{
            console.log("체크 X. d-mid");
        }

        if(difficulty_high.attr("value") === "checked"){
            status *= 5;
        }
        else{
            console.log("체크 X. d-high");
        }
        console.log(status);

        const temp = _.filter(list, v => status % parseInt(v.difficulty) === 0);

        list = {};
        _.forEach(temp , t => list[t.id] = t);

        tmpList = list;
        return list;
    };

    difficulty_low.click(function(){

        if(difficulty_low.attr("value") === "checked"){
            difficulty_low.attr("value", "unchecked");
            $(this).css('background-color', 'white');

        }else{
            difficulty_low.attr("value", "checked");
            $(this).css('background-color', 'silver');
        }
        console.log("low: " + difficulty_low.attr("value"));
        that.updateList();
    });

    difficulty_mid.click(function(){

        if(difficulty_mid.attr("value") === "checked"){
            difficulty_mid.attr("value", "unchecked");
            $(this).css('background-color', 'white');
        }else{
            difficulty_mid.attr("value", "checked");
            $(this).css('background-color', 'silver');
        }
        console.log("mid: " + difficulty_mid.attr("value"));
        that.updateList();
    });

    difficulty_high.click(function(){

        if(difficulty_high.attr("value") === "checked"){
            difficulty_high.attr("value", "unchecked");
            $(this).css('background-color', 'white');
        }else{
            difficulty_high.attr("value", "checked");
            $(this).css('background-color', 'silver');
        }
        console.log("high: " + difficulty_high.attr("value"));
        that.updateList();
    });



    this.filter_time = function(list){

        return list;
    };

    this.filter_kcal = function(list){

        return list;
    };

    this.updateList = function(){

        tmpList = that.searchByName(OriginalList, word);
        tmpList = that.filter_difficulty(tmpList);
        tmpList = that.searchByKcal(tmpList, kcalMin, kcalMax);
        tmpList = that.searchByTime(tmpList, timeMin, timeMax);

        that.drawCookList(tmpList);
        that.addModal();
    }
};
main.init();