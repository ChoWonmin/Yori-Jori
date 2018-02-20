if(!('webkitSpeechRecognition' in window))
    $('#speechbbbbox').html('<strong>지원하지 않는 브라우저입니다.</strong>');
else {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'ko-KR';

    recognition.onresult = function(event) {
        var interim_transcript = '';
        var final_transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        console.log(interim_transcript , final_transcript);

    };

    recognition.start();

}