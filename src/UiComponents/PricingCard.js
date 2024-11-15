import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-material-ui-carousel";
import cambg_1 from "../images/cambg_1.jpg";
import cambg_2 from "../images/cambg_2.jpg";

function PricingCard() {
  const [open, setOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState(null);

  const pricingOptions = [
    {
      type: "3 BHK",
      price: "4000 INR",
      description: "Spacious 3 Bedrooms with Hall and Kitchen with stove and fridge, good stay for family of 8 to 12 people.",
      images: [cambg_1, cambg_2],
    },
    {
      type: "4 BH",
      price: "5000 INR",
      description:
        "Comfortable 4 Bedrooms with Hall and with all basic facilities for a family of 10 to 16 people.",
      images: [cambg_1, cambg_2],
    },
    {
      type: "7 BHK",
      price: "8000 INR",
      description:
        "We rent out the whole house for joint families or for travel agency with accomodation of 18 to 40 people.",
      images: [cambg_1, cambg_2],
    },
    {
      type: "1 BHK",
      price: "1200 INR",
      description: "Comfortable 1 bedroom with balcony which is best suitable for singles or couples.",
      images: [cambg_1, cambg_2],
    },
  ];

  const handleClickOpen = (pricing) => {
    setSelectedPricing(pricing);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPricing(null);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#e0f7fa" }} id="Pricing">
      <Typography
        variant="h3"
        sx={{ color: "#00796b", textAlign: "center", mb: 4 }}
      >
        Pricing Options
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#004d40",
          textAlign: "center",
          mb: 3,
        }}
      >
        Poppins Villa offers versatile accommodation options, including a
        spacious 3BHK on the ground floor, a well-appointed 4BH on the first
        floor, or the entire villa as a 7BHK setup. Additionally, we provide the
        option of renting a single room with a balcony for a more private stay.
        Please note that the listed prices are for non-A/C accommodations. For
        price negotiations or to confirm your stay, kindly contact us directly.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {pricingOptions.map((pricing, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
              onClick={() => handleClickOpen(pricing)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={pricing.images[0]} // Display the first image on the card
                  alt={`${pricing.type} image`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#00796b" }}
                  >
                    {pricing.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pricing.description}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 2, color: "#004d40" }}>
                    {pricing.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for displaying details */}
      {selectedPricing && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{selectedPricing.type}</span>
            <Button onClick={handleClose} color="error">
              <CloseIcon />
            </Button>
          </DialogTitle>
          <DialogContent>
            <Carousel>
              {selectedPricing.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedPricing.type} view ${index + 1}`}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              ))}
            </Carousel>
            <Typography variant="h6" sx={{ mt: 2, color: "#00796b" }}>
              Price: {selectedPricing.price}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "#004d40" }}>
              {selectedPricing.description}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}

export default PricingCard;
