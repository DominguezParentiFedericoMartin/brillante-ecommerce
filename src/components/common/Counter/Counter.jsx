const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <button disabled={counter <= 1} onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <h4>{counter}</h4>
      <button
        disabled={counter >= stock}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button onClick={() => agregarAlCarrito(counter)}>
        Argegar al carrito
      </button>
    </div>
  );
};

export default Counter;
