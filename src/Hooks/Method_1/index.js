import React from "react";
import Parent from "./EXState";
import { Counter1 } from "./FuncUpdate";
import { Counter2 } from "./IndependentClosure";
import { Counter3 } from "./ReduceRenderTimes";
import { Counter4 } from "./EXuseReducer";
import { Counter5 } from "./LazyInitializationState";
import { Counter6 } from "./EXuseContext";
import { Counter7 } from "./ObjectIs";


const Method_1 = () => {
  return (
    <>
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
      <Counter5 />
      <Counter6 />
      <Counter7 />
      <Parent />
    </>
  )
}

export default Method_1;