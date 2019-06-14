import React, { useState } from "react";
import Dice from "./Dice";

export default function DiceTray(prosp) {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [diceArray, setDiceArray] = useState([]);
  const [numberArray, setNumberArray] = useState({});

  const createDice = () => {
    const dArray = [];
    const numArray = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0
    };
    for (let i = 0; i < numberOfDice; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      randomNumber === 1 && numArray.one++;
      randomNumber === 2 && numArray.two++;
      randomNumber === 3 && numArray.three++;
      randomNumber === 4 && numArray.four++;
      randomNumber === 5 && numArray.five++;
      randomNumber === 6 && numArray.six++;
      dArray.push(<Dice number={randomNumber} />);
    }
    setNumberArray(numArray);
    setDiceArray(dArray);
    console.log(numArray);
  };

  return (
    <div className="diceTray">
      <div className="inputRow">
        Enter Number of Dice
        <input value={numberOfDice} onChange={e => setNumberOfDice(e.target.value)} />
        <button onClick={() => createDice()}>ROLL</button>
        <div>
          <span className="number">
            One : <span className="numberFound">{numberArray.one}</span>
          </span>
          <span className="number">
            Two : <span className="numberFound">{numberArray.two}</span>
          </span>
          <span className="number">
            Three : <span className="numberFound">{numberArray.three}</span>
          </span>
          <span className="number">
            Four : <span className="numberFound">{numberArray.four}</span>
          </span>
          <span className="number">
            Five : <span className="numberFound">{numberArray.five}</span>
          </span>
          <span className="number">
            Six : <span className="numberFound">{numberArray.six}</span>
          </span>
        </div>
      </div>
      <div className="diceContainer">{diceArray}</div>
    </div>
  );
}
