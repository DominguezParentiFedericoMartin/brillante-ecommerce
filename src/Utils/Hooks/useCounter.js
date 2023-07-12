import { useState } from "react";

const useCounter = (initial = 0, maxStock) => {
  const [counter, setCounter] = useState(initial);
  const sumar = () => {
    counter < maxStock && setCounter(counter + 1);
  };
  const restar = () => {
    counter > 1 && setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initial);
  };
  return { counter, sumar, restar, reset };
};

export default useCounter;
