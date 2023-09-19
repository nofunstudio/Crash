import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ScoreHeaderToken.module.css";

export function ScoreHeaderToken({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "scoreframe")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "scoretext")} tag="div">
        {"x 4.23"}
      </_Builtin.Block>
    </_Component>
  );
}
