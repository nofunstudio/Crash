import React from "react";
import * as _Builtin from "./_Builtin";

export function Timer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="timercontainer" tag="div">
      <_Builtin.Block className="timertext" tag="div">
        {"X1.25"}
      </_Builtin.Block>
      <_Builtin.Block className="timersubtitle" tag="div">
        {"CURRENTPAYOUT"}
      </_Builtin.Block>
    </_Component>
  );
}
