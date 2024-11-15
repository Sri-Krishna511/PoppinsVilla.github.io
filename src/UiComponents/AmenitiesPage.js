import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HotTubIcon from "@mui/icons-material/HotTub";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import SoapIcon from "@mui/icons-material/Soap";
import TvIcon from "@mui/icons-material/Tv";
import BlindsIcon from "@mui/icons-material/Blinds";

function AmenitiesPage() {
  const amenities = [
    {
      icon: <AcUnitIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Air Conditioning",
    },
    {
      icon: <HotTubIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Hot Water",
    },
    {
      icon: <LocalDiningIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Near By Restaurant",
    },
    {
      icon: <WifiIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Free Wi-Fi",
    },
    {
      icon: <MicrowaveIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Kitchen",
    },
    {
      icon: <LocalParkingIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Parking",
    },
    ,
    {
      icon: <SoapIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Soap & Shampoo",
    },
    {
      icon: <TvIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Television",
    },
    {
      icon: <BlindsIcon sx={{ fontSize: 50, color: "#00796b" }} />,
      name: "Room-Darkening Blinds",
    }
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
      id="Amenities"
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
