import CounterContainer from "../../common/Counter/counterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <div>
      <h4>{product.name}</h4>
      <h6>{product.price}</h6>

      <CounterContainer
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
      />
    </div>
  );
};

export default ItemDetail;
