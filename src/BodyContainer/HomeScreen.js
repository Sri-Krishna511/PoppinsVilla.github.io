import { Box, Grid } from "@mui/material";
// import ImageSlideShow from "../UiComponents/ImageSlideShow";

// import cambg_1 from "../images/cambg_1.jpg";
// import cambg_2 from "../images/cambg_2.jpg";
// import cambg_3 from "../images/cambg_3.jpg";
// import cambg_4 from "../images/cambg_4.jpg";
import WelcomeMessage from "../UiComponents/WelcomeMessage";
import AmenitiesPage from "../UiComponents/AmenitiesPage";
import PricingCard from "../UiComponents/PricingCard";
import LocationPage from "../UiComponents/LocationPage";

// const images = [cambg_1, cambg_2, cambg_3, cambg_4];

export function HomeScreen() {
  return (
    <Box sx={{ paddingTop: "40px" }}>
      <Grid container spacing={2} sx={{ marginTop: "0px" }}>
        <Grid item xs={12}>
          <WelcomeMessage />
        </Grid>
        <Grid item xs={12}>
          <AmenitiesPage />
        </Grid>

        <Grid item xs={12}>
          <PricingCard />
        </Grid>
        <Grid item xs={12}>
          <LocationPage />
        </Grid>
        {/* <Grid item xs={12}>
          <ImageSlideShow images={images} />
        </Grid> */}
      </Grid>
    </Box>
  );
}
