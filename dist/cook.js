'use strict';

var cook = new function () {

    var that = this;
    var maxLength = $('.cook-wrap').attr('length') * 1;
    var currentIndex = -1;
    var cookCanvas = $('.cook-wrap');
    var processCanvasList = $('.process-wrap');

    this.init = function () {

        recognization.init();

        recognization.startMic(function (res) {

            res = res.trim();

            if (res === '다음') {
                if (currentIndex === -1) that.startProcess();else that.nextProcess();
            } else if (res === '아까') that.backProcess();else if (res === '뭐라고' || res === '다시') {
                var description = $(processCanvasList[currentIndex]).attr('description');
                description = description.slice(description.indexOf('.') + 1, description.length);

                $('<iframe src="/speech?text=' + description + '">').appendTo($('.speechFrame'));
            }
        });

        that.addButonAction();
    };

    this.addButonAction = function () {
        $('.process').click(that.startProcess);

        $('.next').click(that.nextProcess);

        $('.back').click(that.backProcess);
    };

    this.startProcess = function () {
        cookCanvas.attr('display', 'none');
        currentIndex = 0;

        $(cookCanvas).css('display', 'none');

        that.changePage(currentIndex);
    };

    this.nextProcess = function () {
        if (currentIndex > maxLength - 2) return;

        $(processCanvasList[currentIndex]).css('display', 'none');

        currentIndex += 1;

        that.changePage(currentIndex);
    };

    this.backProcess = function () {
        $(processCanvasList[currentIndex]).css('display', 'none');

        if (currentIndex >= 0) currentIndex -= 1;

        if (currentIndex === -1) $(cookCanvas).css('display', 'block');else that.changePage(currentIndex);
    };

    this.changePage = function (index) {
        $(processCanvasList[index]).css('display', 'block');

        var description = $(processCanvasList[index]).attr('description');
        description = description.slice(description.indexOf('.') + 1, description.length);

        $('<iframe src="/speech?text=' + description + '">').appendTo($('.speechFrame'));
    };
}();

cook.init();