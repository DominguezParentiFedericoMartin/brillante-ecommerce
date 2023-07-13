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
    <Card sx={{ Width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
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
