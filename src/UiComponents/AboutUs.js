import React from "react";
import { Box, Typography } from "@mui/material";

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
        Nestled in the heart of Mysuru, our villa offers a perfect blend of
        luxury and tranquility. With its stunning architecture, lush gardens,
        and premium amenities, our villa provides an ideal escape from the
        hustle and bustle of daily life. Whether you're looking for a romantic
        getaway, a family retreat, or a peaceful staycation, our villa is your
        home away from home.
      </Typography>
    </Box>
  );
}

export default AboutUs;
