import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function NavButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Información</Button>
      <Button variant="contained" color="success">
        Mi Usuario
      </Button>
      <Button variant="outlined" color="error">
        Promociones
      </Button>
    </Stack>
  );
}

export default NavButtons;
