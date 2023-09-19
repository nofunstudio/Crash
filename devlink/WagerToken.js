import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WagerToken.module.css";

export function WagerToken({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "enterwagerwrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "cashoutbutton")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "iconleftwager")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/6508646410f50c0abebfa17d_Frame%209045.png"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "textstackautobet")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "autocashtext")}
            tag="div"
          >
            {"51.00"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "autocashlabel")}
            tag="div"
          >
            {"WAGER"}
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
