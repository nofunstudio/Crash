import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PlaceBetToken.module.css";

export function PlaceBetToken({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "placebetwrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "placebetbuttoncenter")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "placebetbuttontext")}
          tag="div"
        >
          {"PLACEBET "}
          <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
            <_Builtin.Strong>{"50.25 LOOT"}</_Builtin.Strong>
          </_Builtin.Span>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
