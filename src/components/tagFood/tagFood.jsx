import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

function TagFood() {
  return (
    <span className="bg-color-tag p-3 flex w-fit rounded-full items-center gap-3">
      <CiForkAndKnife />
      Chicken
    </span>
  );
}

export default TagFood;
