import React from "react";
import * as _Builtin from "./_Builtin";
import { AutoCashOutToken } from "./AutoCashOutToken";
import { PlaceBetToken } from "./PlaceBetToken";
import { WagerToken } from "./WagerToken";
import * as _utils from "./utils";
import _styles from "./PlaceBetContainer.module.css";

export function PlaceBetContainer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "placebetrowflex")} tag="div">
      <AutoCashOutToken />
      <PlaceBetToken />
      <WagerToken />
    </_Component>
  );
}
