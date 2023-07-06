import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ usuario, items }) => {
  return (
    (
      <section>
        <div>
          <h2>
            Hola {usuario}. Bienvenido o bienvenida a la tienda Online de este
            pryecto eterno!
          </h2>
        </div>
      </section>
    ),
    (
      <section
        style={{
          paddingTop: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    )
  );
};

export default ItemList;
