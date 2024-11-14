import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import WifiIcon from "@mui/icons-material/Wifi";
import SpaIcon from "@mui/icons-material/Spa";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

function AmenitiesPage() {
  const amenities = [
    {
      icon: <PoolIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Swimming Pool",
    },
    {
      icon: <FitnessCenterIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Gym & Fitness",
    },
    {
      icon: <LocalDiningIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Restaurant",
    },
    {
      icon: <WifiIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Free Wi-Fi",
    },
    {
      icon: <SpaIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Spa Services",
    },
    {
      icon: <LocalParkingIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Parking",
    },
  ];

  return (
    <Box
      sx={{
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, color: "#00796b" }}>
        Our Amenities
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 6, color: "#004d40", maxWidth: "600px" }}
      >
        We offer a variety of amenities to make your stay comfortable and
        memorable. Enjoy top-class facilities to enhance your experience with
        us.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {amenities.map((amenity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              {amenity.icon}
              <Typography variant="h6" sx={{ mt: 2, color: "#004d40" }}>
                {amenity.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AmenitiesPage;
