import React from "react";

export default function Dice(props) {
  const { number } = props;

  const findPip = pips => {
    const isFilled = pips.reduce((included, pip) => (pip === number ? true : included), false);
    const pipName = isFilled ? "diePip" : "";
    return pipName;
  };

  const findAnimation = num => {
    switch (num) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";

      default:
        break;
    }
  };

  return (
    <div className={`dieBox ${findAnimation(number)}`}>
      <div className="dieCol left">
        <div className={`dieGrid ${findPip([2, 3, 4, 5, 6])}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${findPip([6])}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${findPip([4, 5, 6])}`} />
      </div>
      <div className="dieCol filler" />
      <div className="dieCol ">
        <div className={`dieGrid ${findPip([6])}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${findPip([1, 3, 5, 6])} `} />
        <div className="dieGrid" />
        <div className={`dieGrid ${findPip([6])}`} />
      </div>
      <div className="dieCol filler" />
      <div className="dieCol ">
        <div className={`dieGrid ${findPip([4, 5, 6])}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${findPip([6])}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${findPip([2, 3, 4, 5, 6])}`} />
      </div>
    </div>
  );
}
