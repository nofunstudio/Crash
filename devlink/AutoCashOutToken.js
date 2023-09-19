import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AutoCashOutToken.module.css";

export function AutoCashOutToken({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "autocashoutwrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "cashoutbutton")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "textstackautobet")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "autocashtext")}
            tag="div"
          >
            {"x 1.25"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "autocashlabel")}
            tag="div"
          >
            {"AUTOCASHOUT"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "iconrightautobet")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/65086c7059ebc8b20d906430_autoarrows.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
