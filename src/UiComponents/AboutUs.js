import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function AboutUs() {
  return (
    <Box sx={{ padding: "20px" }} id="aboutUs">
      <Typography
        variant="h3"
        sx={{ color: "#00796b", textAlign: "center", mb: 4 }}
      >
        About Poppins Villa!
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#004d40", lineHeight: 1.8, mb: 4, textAlign: "center" }}
      >
        <p>
          Our homestay is located beside the Bengaluru-Mysuru Expressway service
          road, This homestay is more than just a place to stay. Located
          slightly on the outskirts of Mysuru, but you will never feel far from
          the city.Our caretaker is always at your service, ensuring your stay
          is comfortable and memorable. As night falls, you'll be delighted by
          the magical sight of fireflies (jugnu) dancing in the vicinity. And if
          you're lucky, you may even get a chance to witness the peacock nearby.
        </p>
        <p>
          What makes our homestay truly special is the charming Cauvery
          subsidiary canal flowing nearby, providing a refreshing ambiance.
          Surrounded by lush green gardens and fields, you'll feel like you're
          staying at your own private farmhouse. Come and experience a unique
          blend of nature, comfort, and hospitality that will make your stay
          unforgettable!
        </p>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ color: "#00796b", textAlign: "center", mb: 4 }}
          >
            Contact Details
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            href="tel:+918105004680"
            sx={{
              backgroundColor: "#00796b",
              ":hover": { backgroundColor: "#004d40" },
              textTransform: "none"
            }}
          >
            Krishna
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            href="tel:+919845448902"
            sx={{
              backgroundColor: "#00796b",
              ":hover": { backgroundColor: "#004d40" },
              textTransform: "none"
            }}
          >
            Sreejith
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUs;
