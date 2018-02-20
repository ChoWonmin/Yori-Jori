'use strict';

var recognization = new function () {

    var mic = new webkitSpeechRecognition();

    this.setting = function () {
        mic.continuous = true;
        mic.interimResults = true;
        mic.lang = 'ko-KR';
    };

    if (!('webkitSpeechRecognition' in window)) alert('음성 인식을 지원하지 않는 브라우저입니다');else {

        mic.onresult = function (event) {

            var final_transcript = '';

            console.log(event);

            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) final_transcript += event.results[i][0].transcript;
            }

            console.log(final_transcript);
        };

        mic.start();
    }
}();