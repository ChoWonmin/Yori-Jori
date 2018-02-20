'use strict';

var recognization = new function () {

    var mic = void 0;

    this.init = function () {

        if (!('webkitSpeechRecognition' in window)) {
            alert('음성 인식을 지원하지 않는 브라우저입니다');
            return -1;
        }

        mic = new webkitSpeechRecognition();

        mic.continuous = true;
        mic.interimResults = false;
        mic.lang = 'ko-KR';
    };

    this.startMic = function (action) {

        mic.onresult = function (event) {

            var res = '';

            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) res += event.results[i][0].transcript;
            }

            action(res);
        };

        mic.start();
    };

    this.stopMic = function () {
        mic.stop();
    };
}();