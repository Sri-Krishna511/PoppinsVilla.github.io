import React from "react";
import { Box, Grid, Typography, Button} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";

function AboutUs() {
  return (
    <>
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
      </Box>
      <Box sx={{ padding: "20px", backgroundColor: "#e0f7fa" }} >
      <Grid container spacing={2} id="contactus" >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ color: "#00796b", textAlign: "center", mb: 1 }}
          >
            Contact Details
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#004d40",
              textAlign: "center",
              mb: 3,
            }}
          >
            Click on the buttons below to call for an enquiry regarding the
            stay.
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
              textTransform: "none",
            }}
          >
            Sri Krishna
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            href="tel:+919964418600"
            sx={{
              backgroundColor: "#00796b",
              ":hover": { backgroundColor: "#004d40" },
              textTransform: "none",
            }}
          >
            Ganapathi
          </Button>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} id="contactus">
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ color: "#00796b", textAlign: "center", mb: 2 }}
          >
            Get in Touch
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <IconButton
              href="tel:+918105004680"
              sx={{
                color: "#00796b",
                ":hover": { color: "#004d40" },
              }}
            >
              <PhoneIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="mailto:srikrishnabadi.sgb@gmail.com"
              sx={{
                color: "#00796b",
                ":hover": { color: "#004d40" },
              }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://wa.me/918105004680"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#00796b",
                ":hover": { color: "#004d40" },
              }}
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://instagram.com/poppinsvilla"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#00796b",
                ":hover": { color: "#004d40" },
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="tel:+919964418600"
              sx={{
                color: "#00796b",
                ":hover": { color: "#004d40" },
              }}
            >
              <AddIcCallIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid> */}
      {/* Footer Section */}
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          padding: "10px 0",
          backgroundColor: "#f1f1f1",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "#00796b", fontWeight: 600 }}>
          © 2024 Poppins Villa. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;
