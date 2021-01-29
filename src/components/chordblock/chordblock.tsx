import React, { useState } from "react";
import style from "./chordblock.module.css";

import iconEdit from "../../icons/icon-edit.svg";

interface propTypes {
  chord: string;
  scaleDegree: string;
}

const ChordBlock = (props: propTypes) => {
  const [mouseOver, setMouseOver] = useState(false)
  const { chord, scaleDegree } = props;

  return (
    <div className={style["chord-block"]} onMouseEnter={()=> setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)}>
      <button style={{ height: "20px", width: "20px", padding: "10px 0 0 10px", visibility: mouseOver ? "visible": "hidden", color: "green" }}>
      <img src={iconEdit}  alt="edit"/>
      </button>
      <div className={style["chord-section"]}>
        <div className={style["chord"]}>{chord}</div>
        <div className={style["scale-degree"]}>{scaleDegree}</div>
      </div>
    </div>
  );
};

export default ChordBlock;
