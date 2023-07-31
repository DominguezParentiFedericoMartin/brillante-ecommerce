import { Button } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { products } from "../../productsMock";
const dashboard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };
  return (
    <div>
      <h1>Ruta para el administrador</h1>
      <Button onClick={rellenar}>Rellenar base de datos</Button>
    </div>
  );
};

export default dashboard;
