import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const MaterialComponents = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Link to="/Cart">
        <Badge badgeContent={12} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Link>
    </div>
  );
};

export default MaterialComponents;
