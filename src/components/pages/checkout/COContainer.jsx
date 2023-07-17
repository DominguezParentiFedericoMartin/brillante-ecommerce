import { useState } from "react";
import { useNavigate } from "react-router-dom";
useNavigate;
const COContainer = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", lastName: "" });
  const funcionFormulario = (evento) => {
    evento.preventDefault();
    // fetch --> ver after class axios AXIOS.POST ("DASAD", {data})
    console.log(userData);
    alert("Compra realizada con exito");
    navigate("/");
  };
  const funcionInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionFormulario}>
        <input
          type="text"
          placeholder="ingrese nombre"
          name="name"
          onChange={funcionInput}
        />
        <input
          type="text"
          placeholder="ingrese apellido"
          name="lastName"
          onChange={funcionInput}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default COContainer;
