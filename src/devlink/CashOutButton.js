import React from "react";
import * as _Builtin from "./_Builtin";

export function CashOutButton({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="cashoutbutton" tag="div">
      <_Builtin.Image
        className="iconleftcashout"
        loading="lazy"
        width="auto"
        height="auto"
        alt="__wf_reserved_inherit"
        src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/6508646410f50c0abebfa17d_Frame%209045.png"
      />
      <_Builtin.Block className="cashoutmultiplytext" tag="div">
        {"+100.90"}
      </_Builtin.Block>
      <_Builtin.Block className="cashoutinnerbutton" tag="div">
        <_Builtin.Block className="cashoutbuttoninnertext" tag="div">
          {"CASH"}
          <br />
          {"OUT"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
