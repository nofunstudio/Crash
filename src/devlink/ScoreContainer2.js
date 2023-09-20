import React from "react";
import * as _Builtin from "./_Builtin";
import { Timer } from "./Timer";
import { ScoreHeaderToken } from "./ScoreHeaderToken";

export function ScoreContainer2({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="scoreheadercontainer" clearfix={true} tag="div">
      <_Builtin.Block className="topscoresheader" tag="div">
        <Timer />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
        <ScoreHeaderToken />
      </_Builtin.Block>
    </_Component>
  );
}
