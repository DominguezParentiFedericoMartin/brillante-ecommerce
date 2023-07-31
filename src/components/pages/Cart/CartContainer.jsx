import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h3>{elemento.title}</h3>
            <p>{elemento.price}</p>
            <h4>Cantida: {elemento.quantity}</h4>
            <Button onClick={() => deleteById(elemento.id)}>Eliminar</Button>
          </div>
        );
      })}
      {cart.lenght != 0 && (
        <div>
          <Button onClick={clearCart}>Limpiar Carrito</Button>
          <Link to="/checkout">
            <Button>Terminar compra</Button>
          </Link>
        </div>
      )}
      <h2>El total del carrito es: {total}</h2>
    </div>
  );
};

export default CartContainer;
