import React from "react";
import * as _Builtin from "./_Builtin";

export function WagerToken({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="enterwagerwrapper" tag="div">
      <_Builtin.Block className="cashoutbutton" tag="div">
        <_Builtin.Image
          className="iconleftwager"
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650860e36a89f83f850ea0b9/6508646410f50c0abebfa17d_Frame%209045.png"
        />
        <_Builtin.Block className="textstackautobet" tag="div">
          <_Builtin.Block className="autocashtext" tag="div">
            {"51.00"}
          </_Builtin.Block>
          <_Builtin.Block className="autocashlabel" tag="div">
            {"WAGER"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Image
          className="iconrightautobet"
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
