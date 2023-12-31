import React from "react";
import * as _Builtin from "./_Builtin";
import { ScoreHeaderToken } from "./ScoreHeaderToken";

export function ScoreHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="scoreheadercontainer" tag="div">
      <_Builtin.Block className="topscoresheader" tag="div">
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
