import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
