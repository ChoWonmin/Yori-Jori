const cook = new function () {

    const that = this;
    const maxLength = $('.cook-wrap').attr('length') * 1;
    let currentIndex;
    const cookCanvas = $('.cook-wrap');
    const processCanvasList = $('.process-wrap');

    this.addButoonAction = function () {
        $('.process').click(function () {
            cookCanvas.attr('display','none');
            currentIndex = 0;

            $(cookCanvas).css('display','none');
            $(processCanvasList[0]).css('display','block');

        });

        $('.next').click(function () {
            $(processCanvasList[currentIndex]).css('display','none');

            if(currentIndex <= maxLength-2)
                currentIndex += 1;

            that.changePage(currentIndex);
        });

        $('.back').click(function () {
            $(processCanvasList[currentIndex]).css('display','none');

            if(currentIndex >= 0)
                currentIndex -= 1;

            if(currentIndex === -1)
                $(cookCanvas).css('display','block');
            else
                that.changePage(currentIndex);

        });

    }

    this.changePage = function (index) {

        $(processCanvasList[index]).css('display','block');
    }



}

cook.addButoonAction();



