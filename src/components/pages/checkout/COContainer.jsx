import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const COContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  /*const navigate = useNavigate()*/ const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let total = getTotalPrice();
  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: userData,
      item: cart,
      total,
      date: serverTimestamp(),
    };
    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));
    // fetch --> ver after class axios AXIOS.POST ("DASAD", {data})
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };
  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>

      {orderId ? (
        <h3>Su numero de compra es : {orderId}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ingrese nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese teléfono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese correo electrónico"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default COContainer;
