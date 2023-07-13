import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function NavButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/">
        <Button color="secondary">Todas</Button>
      </Link>
      <Link to="/category/futbol">
        <Button variant="contained" color="success">
          Futbol
        </Button>
      </Link>
      <Link to="/category/conmemorativa">
        <Button variant="outlined" color="error">
          Conmemorativas
        </Button>
      </Link>
    </Stack>
  );
}

export default NavButtons;
