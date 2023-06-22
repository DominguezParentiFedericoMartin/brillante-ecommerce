import { Box, Grid } from "@mui/material";

const Material = () => {
  return (
    // <Box sx={{ width: "100%", backgroundColor: "red" }}>
    //   <Grid container>
    //     <Grid item xs={12} md={5}>
    //       <div style={{ width: "100%", backgroundColor: "red" }}>
    //         <h2>Caja uno</h2>
    //         <h3>Hola como estas</h3>
    //       </div>
    //     </Grid>

    //     <Grid item xs={12} md={5}>
    //       <h2 style={{ width: "100%", backgroundColor: "blue" }}>Caja 2</h2>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          border: {
            xs: "2px solid blue",
            sm: "2px solid peru",
            md: "2px solid black",
          },
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        }}
      >
        <h1>El titulo</h1>
      </Box>
      <Box
        sx={{
          border: {
            xs: "2px solid blue",
            sm: "2px solid peru",
            md: "2px solid black",
          },
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          display: { md: "none" },
        }}
      >
        <h1>El titulo</h1>
      </Box>
    </Box>
  );
};

export default Material;
