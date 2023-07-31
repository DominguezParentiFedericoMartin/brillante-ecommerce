import CounterContainer from "../../common/Counter/CounterContainer";
function ItemDetail({ product, agregarAlCarrito, canttidadEnCarrito }) {
  return (
    <div>
      <h4>{product.title}</h4>
      <h6>{product.price}</h6>

      <CounterContainer
        canttidadEnCarrito={canttidadEnCarrito}
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
      />
    </div>
  );
}

export default ItemDetail;
