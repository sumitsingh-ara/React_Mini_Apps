import { useState, useEffect } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import "./Number.css";
export const NumberGame = () => {
  const [number, setNumber] = useState();
  const [attempts, setAttempts] = useState(7);
  const [startGame, setStartGame] = useState(false);
  const [guess, setGuess] = useState(null);
  const [guessedValue, setGuessedValue] = useState("");
  const [totalHistory,setTotalHistory] = useState({
    total:0,
    win:0,
    loose:0,
  })
  useEffect(() => {
    generateRandomNumber();
  }, [startGame]);

  const generateRandomNumber = () => {
    let num = Math.floor(Math.random() * (100 - 20) + 20);
    setNumber(num);
  };
  const loosed = () => {
    setAttempts(7);
    setGuessedValue("");
    setStartGame(false);
    setGuess(null);
  }
  const checkValue = () => {
    setAttempts(attempts-1);
    if(attempts === 1 && guessedValue !== number){
      alert(`Gameover - Correct Number was ${number}`);
     loosed();
     setTotalHistory({
      total:totalHistory.total+1,
      win:totalHistory.win,
      loose:totalHistory.loose+1,
     })
     return;
    }
    if(guessedValue < number)setGuess(true);
    if(guessedValue > number)setGuess(false);
    if(guessedValue === number){
      alert(`You won in ${7-attempts+1} attempts`)
      setTotalHistory({
        total:totalHistory.total+1,
        win:totalHistory.win+1,
        loose:totalHistory.loose,
       })
       loosed();
       return;
    }
   setGuessedValue("")
  };
  return (
    <>
     {!startGame?<p className="mb-4 h4">Welcome to Number Finder Game </p>:<p className="mb-4 h4" >Guess a number between 20 to 100</p>}
      <div className="mainDiv">
        <div>
        {!startGame ? (
          <button onClick={()=>{
            setStartGame(true);
          }} className="btn btn-primary">Start a new Game</button>
        ) : (
          <button onClick={()=>{
            loosed()
          }} className="btn btn-danger">Reset Game</button>
        )}
        <div className="m-3">
          {startGame?guess!==null? guess?"Please go for a higher value":"Please go for a lower value":"Take your guess":""}
        </div>
        {startGame?<div className="input">
            <input onChange={(e)=>{
              setGuessedValue(Number(e.target.value))
            }} type="number" value={guessedValue} className="form-control" placeholder="enter value between 20 to 100" min="20" max ="100" />
            <button onClick={checkValue} className="btn btn-success ml-3">Guess</button>
        </div>:""}
        </div>
        {/* 2nd block */}
        <div className="numberMargin">
          <p className="h4">No of attempts left: {attempts}</p>
          <div className="total">
            <div> <p className="m-0"> Total games played </p>
           <p className="m-0"> Total win </p>
           <p className="m-0"> Total loose </p></div>
            <div>
              <p className="m-0">{totalHistory.total}</p>
              <p className="m-0">{totalHistory.win}</p>
              <p className="m-0">{totalHistory.loose}</p>
            </div>
          </div>
          <PieChart style={{width:"100px"}}
  data={[
    { title: "Win", value: totalHistory.total===0?50:totalHistory.win, color: '#06ff48' },
    { title: "Loose", value: totalHistory.total===0?50:totalHistory.loose, color: '#f90800' }
  ]}
/>
        </div>
      </div>
    </>
  );
};
