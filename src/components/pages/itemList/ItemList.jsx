import { Skeleton, Stack } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ usuario, items }) => {
  let arr = [1, 2, 3, 4];
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
        {}

        {
          (items.lenght = !0
            ? items.map((item) => <ProductCard key={item.id} item={item} />)
            : arr.map((elemento) => (
                <Stack spacing={1} key={elemento}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
              )))
        }
      </section>
    )
  );
};

export default ItemList;
