import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  let usuario = "Profe";
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject("chau");
    });
    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
    //.finally(() => console.log("hola"));
  }, []);
  return <ItemList usuario={usuario} saludo={saludo} items={items} />;
};

export default ItemListContainer;
