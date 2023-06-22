import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  let usuario = "Profe";
  return <ItemList usuario={usuario} saludo={saludo} />;
};

export default ItemListContainer;
