import CounterContainer from "../../common/Counter/counterContainer";
function ItemDetail({ product, agregarAlCarrito }) {
  return (
    <div>
      <h4>{product.title}</h4>
      <h6>{product.price}</h6>

      <CounterContainer
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
      />
    </div>
  );
}

export default ItemDetail;
