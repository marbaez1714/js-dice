import React from "react";

export default function Dice(props) {
  const { number } = props;

  const onePip = number === 1 && "diePip";
  const threePip = number === 3 && "diePip";
  const fourPip = number === 4 && "diePip";
  const fivePip = number === 5 && "diePip";
  const sixPip = number === 6 && "diePip";

  const cornerPip = number > 1 && "diePip";

  return (
    <div className="dieBox">
      <div className="dieCol left">
        <div className={`dieGrid ${cornerPip}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${sixPip}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${sixPip || fourPip || fivePip}`} />
      </div>
      <div className="dieCol filler" />
      <div className="dieCol ">
        <div className={`dieGrid ${sixPip}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${onePip || sixPip || threePip || fivePip} `} />
        <div className="dieGrid" />
        <div className={`dieGrid ${sixPip}`} />
      </div>
      <div className="dieCol filler" />
      <div className="dieCol ">
        <div className={`dieGrid ${sixPip || fourPip || fivePip}`} />
        <div className="dieGrid" />
        <div className={`dieGrid ${sixPip} `} />
        <div className="dieGrid" />
        <div className={`dieGrid ${cornerPip}`} />
      </div>
    </div>
  );
}
