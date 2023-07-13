import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  console.log(items);
  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
      //reject("chau");
    });
    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
    //.finally(() => console.log("hola"));
  }, [categoryName]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
