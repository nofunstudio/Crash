import React from "react";
import * as _Builtin from "./_Builtin";
import { CashOutToken } from "./CashOutToken";
import * as _utils from "./utils";
import _styles from "./CashOutContainer.module.css";

export function CashOutContainer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "cashoutrowflex")} tag="div">
      <CashOutToken />
      <CashOutToken />
      <CashOutToken />
      <CashOutToken />
    </_Component>
  );
}
