const Counter = ({ counter, agregarAlCarrito, stock, sumar, restar }) => {
  return (
    <div>
      <button disabled={counter <= 1} onClick={restar}>
        -
      </button>
      <h4>{counter}</h4>
      <button disabled={counter >= stock} onClick={sumar}>
        +
      </button>
      <button onClick={() => agregarAlCarrito(counter)}>
        Argegar al carrito
      </button>
    </div>
  );
};

export default Counter;
