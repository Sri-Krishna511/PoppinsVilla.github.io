import { Box, Grid } from "@mui/material";
import ImageSlideShow from "../UiComponents/ImageSlideShow";

import cambg_1 from "../images/cambg_1.jpg";
import cambg_2 from "../images/cambg_2.jpg";
import cambg_3 from "../images/cambg_3.jpg";
import cambg_4 from "../images/cambg_4.jpg";

const images = [cambg_1, cambg_2, cambg_3, cambg_4];

export function HomeScreen() {
  return (
    <Box sx={{ paddingTop: "40px" }}>
      <Grid container spacing={2} sx={{ marginTop: "0px" }}>
        {/* <Grid item xs={7}>
          <h1>Welcome to My Page</h1>
        </Grid> */}
        <Grid item xs={12}>
          <ImageSlideShow images={images} />
        </Grid>
      </Grid>
    </Box>
  );
}
