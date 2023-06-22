import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const MaterialComponents = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Badge badgeContent={12} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default MaterialComponents;
