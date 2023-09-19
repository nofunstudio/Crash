import React from "react";
import * as _Builtin from "./_Builtin";
import { CashOutToken } from "./CashOutToken";

export function CashOutContainer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="cashoutrowflex" tag="div">
      <CashOutToken />
      <CashOutToken />
      <CashOutToken />
      <CashOutToken />
    </_Component>
  );
}
