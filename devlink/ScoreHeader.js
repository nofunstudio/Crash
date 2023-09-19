import React from "react";
import * as _Builtin from "./_Builtin";
import { ScoreHeaderToken } from "./ScoreHeaderToken";
import * as _utils from "./utils";
import _styles from "./ScoreHeader.module.css";

export function ScoreHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "topscoresheader")} tag="div">
      <ScoreHeaderToken />
      <ScoreHeaderToken />
      <ScoreHeaderToken />
      <ScoreHeaderToken />
      <ScoreHeaderToken />
      <ScoreHeaderToken />
      <ScoreHeaderToken />
      <ScoreHeaderToken />
    </_Component>
  );
}
