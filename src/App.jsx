import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/Cart/CartContainer";
import Navbar from "./components/layout/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Route element={<Navbar />}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<CartContainer />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Route>
    </BrowserRouter>
  );
}

export default App;
