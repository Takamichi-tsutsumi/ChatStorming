const Speech = function(self) {
    SpeechRec.config({
        "ApiKey":"7750355166594b2e3649506953436a4f5569566932315148304d667258786c56366a5a7252427632387137",
        "NrFlag":true,
        "SbmMode":2,
        "Nbest":3,
        "OpusWorkerUrl":"/vendor/js/libopus.worker.js"
    });

    SpeechRec.on_start(function() {
        console.log("speech start");
    });

    SpeechRec.on_error(function(e) {
        console.log("error : " + e['name'] + e['message']);
    });

    SpeechRec.on_result(function(result) {
        console.log(result);
        window.tnode = result;
        self.addWords(result.candidates[0]['speech']);
        SpeechRec.start();
    });

    setInterval(function() {
        if (SpeechRec._state == 'STOP' && !SpeechRec.forceStopped) {
            console.log("stopped");
            SpeechRec.start();
        }
    }, 3000)

    SpeechRec.start();
};

export default Speech;
