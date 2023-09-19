import React from "react";
import * as _Builtin from "./_Builtin";
import { AutoCashOutToken } from "./AutoCashOutToken";
import { PlaceBetToken } from "./PlaceBetToken";
import { WagerToken } from "./WagerToken";

export function PlaceBetContainer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="placebetrowflex" tag="div">
      <AutoCashOutToken />
      <PlaceBetToken />
      <WagerToken />
    </_Component>
  );
}
