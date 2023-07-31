import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const MaterialComponents = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/Cart" style={{ padding: "10px", color: "lightblue" }}>
      <Badge badgeContent={cart.length} color="primary" showZero>
        <ShoppingCartIcon color="action" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default MaterialComponents;
