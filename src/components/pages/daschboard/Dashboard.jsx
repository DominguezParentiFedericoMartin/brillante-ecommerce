import { Button } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { products } from "../../productsMock";
import { Link } from "react-router-dom";

const dashboard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };
  return (
    <div>
      <div className="navContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqpkwwzdz/image/upload/v1687389913/Brillant%C3%A9/logo_phxbl1.png"
            alt="logo"
            className="logo"
          ></img>
        </Link>
        <h1 className="titulo">
          Club Social y Polideportibo Brillanté: Tienda Online Oficial
        </h1>
        <Link to="/">
          <Button variant="outlined">Inicio</Button>
        </Link>
      </div>
      <div>
        <h1>Ruta para el administrador</h1>
        <Button onClick={rellenar}>Agregar</Button>
      </div>
    </div>
  );
};

export default dashboard;
