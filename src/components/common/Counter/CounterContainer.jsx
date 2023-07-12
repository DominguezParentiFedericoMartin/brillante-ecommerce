import { useState } from "react";
import Counter from "./Counter";
import useCounter from "../../../Utils/Hooks/useCounter";
const CounterContainer = ({ agregarAlCarrito, stock }) => {
  const { counter, sumar, restar } = useCounter(1, stock);
  return (
    <Counter
      counter={counter}
      sumar={sumar}
      restar={restar}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;
