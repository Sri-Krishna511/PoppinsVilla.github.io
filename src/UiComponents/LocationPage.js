import React from "react";
import { Box, Typography } from "@mui/material";

function LocationPage() {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#e0f7fa"
      }}
      id="Location"
    >
      <Typography
        variant="h3"
        sx={{ color: "#00796b", textAlign: "center", mb: 4 }}
      >
        Our Location
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#004d40",
          textAlign: "center",
          mb: 4,
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        Visit our property located 2 km to the ring road with easy access to
        popular attractions and transportation.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.0976627309037!2d76.66523287411061!3d12.376390027650249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71fe9e661287%3A0xc62eff27380d2257!2sPoppins%20Villa!5e0!3m2!1sen!2sin!4v1731608210629!5m2!1sen!2sin"
          width="100%"
          height="450px"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}

export default LocationPage;
