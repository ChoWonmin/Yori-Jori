const cook = new function () {

    const that = this;
    const maxLength = $('.cook-wrap').attr('length') * 1;
    let currentIndex = -1;
    const cookCanvas = $('.cook-wrap');
    const processCanvasList = $('.process-wrap');

    this.init = function () {

        console.log('cook init');

        if(recognization.init() != -1)
            recognization.startMic( function (res) {

            res = res.trim();

            console.log(res);

            if(res==='다음'){
                if(currentIndex===-1)
                    that.startProcess();
                else
                    that.nextProcess();
            }
            else if(res==='아까'||res==='전에')
                that.backProcess();
            else if(res==='뭐라고' || res==='다시'){
                let description = $(processCanvasList[currentIndex]).attr('description');

                $(`<iframe src="/speech?text=${description}">`).appendTo($('.speechFrame'));
            }

        });

        that.addButonAction();
    }

    this.addButonAction = function () {
        $('.process').click( that.startProcess );

        $('.next').click( that.nextProcess );

        $('.back').click( that.backProcess );

    }

    this.startProcess = function () {

        cookCanvas.attr('display','none');
        currentIndex = 0;

        $(cookCanvas).css('display','none');

        that.changePage(currentIndex);
    }

    this.nextProcess = function () {
        if(currentIndex > maxLength-2)
            return ;

        $(processCanvasList[currentIndex]).css('display','none');

        currentIndex += 1;

        that.changePage(currentIndex);
    }

    this.backProcess = function () {
        $(processCanvasList[currentIndex]).css('display','none');

        if(currentIndex >= 0)
            currentIndex -= 1;

        if(currentIndex === -1)
            $(cookCanvas).css('display','block');
        else
            that.changePage(currentIndex);

    }

    this.changePage = function (index) {
        $(processCanvasList[index]).css('display','block');

        let description = $(processCanvasList[index]).attr('description');

        //$(`<iframe src="/speech?text=${description}">`).appendTo($('.speechFrame'));

    }

}

cook.init();