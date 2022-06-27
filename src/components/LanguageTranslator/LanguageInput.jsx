import { webkitSpeech } from "../../utilis/weblitSpeechRecognition";
import { useState } from "react";

import './Language.css'
const audi = require("../../assets/audios/test.mp3");
export const LanguageInput = ({
  data,
  loading,
  value,
  from,
  to,
  setValue,
  setData,
}) => {
  const [listening, setListening] = useState(false);
  return (
    <>
      <div className="sppecherGrid">
        {listening ? (
          <img className="listenerGiphy"
            src="https://media3.giphy.com/media/vgx91V0Z1RJBVVbHDv/giphy.gif"
            alt="Listening"
          />
        ) : (
          <button
          className="btn btn-primary"
          style={{margin:"1vh 3.5vh"}}
            onClick={() => {
              if (!from.from || !to.to) return;
              setValue("");
              setData("");
              const audio = new Audio(audi);
              audio.play();
              setListening(true);
              webkitSpeech(setValue, setListening);
            }}
          >
            Speak
          </button>
        )}
        <button className="btn btn-primary"
           style={{margin:"1vh 3.5vh"}}
          onClick={() => {
            let speak = new SpeechSynthesisUtterance();
            speak.lang = to.to;
            speak.text = data;
            speak.volume = 1;
            window.speechSynthesis.speak(speak);
          }}
        >
          Read me
        </button>
        <h3 className="textHider">
          From <span style={{ color: "green" }}>{from.name}</span>
        </h3>
        <h3  className="textHider">
          To <span style={{ color: "green" }}>{to.name}</span>
        </h3>
        <textarea
         className="form-control textContro"
          spellCheck={true}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          style={{ height: "400px" }}
          placeholder="Please enter here..."
          value={value}
        ></textarea>
        <textarea
         className="form-control textContro"
          disabled={true}
          value={
            loading
              ? `Translating your words from ${from.name} to ${to.name}`
              : data
          }
          placeholder="You will get your words here"
        />
      </div>
    </>
  );
};
