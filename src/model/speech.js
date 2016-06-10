const Speech = function(self) {
    SpeechRec.config({
        "ApiKey":"354e417039454b4a4d5255544f475575596e4e38375065327133385854577049594e514849665939744941",
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
