const cook = new function () {
    let currentIndex;
    const cookCanvas = $('.cook-wrap');
    //const processCanvasList = $('.process-wrap');

    this.init = async function () {
        $('.start-btn').click(function () {
            cookCanvas.attr('display','none');
            currentIndex = 0;

            //processCanvasList[currentIndex].attr('display','block');

        });



    }



}

cook.init();



