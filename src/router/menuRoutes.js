import ItemDetailContainer from "../components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import COContainer from "../components/pages/checkout/COContainer";
import CartContainer from "../components/pages/Cart/CartContainer";
import dashboard from "../components/pages/daschboard/dashBoard";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/Cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: COContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: dashboard,
  },
];
