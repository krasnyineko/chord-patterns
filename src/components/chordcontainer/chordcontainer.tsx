import React from "react";
import ChordBlock from "../chordblock";
import style from "./chordcontainer.module.css"

const ChordContainer = () => {
  return (
    <div className={style["chord-container"]}>
      <ChordBlock chord={"Cm"} scaleDegree={"i"} />
      <ChordBlock chord={"Cm"} scaleDegree={"i"} />
      <ChordBlock chord={"Cm"} scaleDegree={"i"} />
      <ChordBlock chord={"Cm"} scaleDegree={"i"} />
      <ChordBlock chord={"Cm"} scaleDegree={"i"} />
    </div>
  );
};

export default ChordContainer;
