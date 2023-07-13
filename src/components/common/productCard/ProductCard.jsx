import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "../../../../node_modules/@mui/material";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <Card sx={{ Width: "5%" }}>
      <CardMedia sx={{ height: 100 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
