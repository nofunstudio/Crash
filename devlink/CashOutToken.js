import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CashOutToken.module.css";

export function CashOutToken({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "cashoutwrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "cashoutbutton")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "iconleftcashout")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/6508646410f50c0abebfa17d_Frame%209045.png"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "cashoutmultiplytext")}
          tag="div"
        >
          {"+100.90"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "cashoutinnerbutton")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cashoutbuttoninnertext")}
            tag="div"
          >
            {"CASH"}
            <br />
            {"OUT"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
