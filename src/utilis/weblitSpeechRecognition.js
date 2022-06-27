
export const webkitSpeech=(setValue,setListening)=>{
    let translate
    let listener = new window.webkitSpeechRecognition();
    listener.onstart= function(){
        // console.log("speak please!");
        setListening(true);
    }
    listener.onspeechend = function(){
        listener.stop();
        setListening(false);
    }

    listener.onresult = function(e){
       translate = e.results[0][0].transcript;
        setValue(translate)
    }
    listener.start();
}