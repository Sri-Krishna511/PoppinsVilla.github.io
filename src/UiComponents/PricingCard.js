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
import bhk3_1 from "../images/bedroomImages/3bhk_1.jpg";
import bhk3_2 from "../images/bedroomImages/3bhk_2.jpg";
import bhk3_3 from "../images/bedroomImages/3bhk_3.jpg";
import bhk3_4 from "../images/bedroomImages/3bhk_4.jpg";
import bhk3_5 from "../images/bedroomImages/3bhk_5.jpg";
import bhk3_6 from "../images/bedroomImages/3bhk_6.jpg";
import bhk3_7 from "../images/bedroomImages/3bhk_7.jpg";
import bhk3_8 from "../images/bedroomImages/3bhk_8.jpg";
import bhk3_9 from "../images/bedroomImages/3bhk_9.jpg";
import bhk3_10 from "../images/bedroomImages/3bhk_10.jpg";
import bhk3_11 from "../images/bedroomImages/3bhk_11.jpg";
import bhk4_1 from "../images/bedroomImages/4bhk_1.jpg";
import bhk4_2 from "../images/bedroomImages/4bhk_2.jpg";
import bhk4_3 from "../images/bedroomImages/4bhk_3.jpg";
import bhk4_4 from "../images/bedroomImages/4bhk_4.jpg";
import bhk4_5 from "../images/bedroomImages/4bhk_5.jpg";
import bhk4_6 from "../images/bedroomImages/4bhk_6.jpg";
import bhk4_7 from "../images/bedroomImages/4bhk_7.jpg";
import bhk4_8 from "../images/bedroomImages/4bhk_8.jpg";
import bhk4_9 from "../images/bedroomImages/4bhk_9.jpg";
import bhk4_10 from "../images/bedroomImages/4bhk_10.jpg";
import bhk4_11 from "../images/bedroomImages/4bhk_11.jpg";
import bhk4_12 from "../images/bedroomImages/4bhk_12.jpg";
import bhk4_13 from "../images/bedroomImages/4bhk_13.jpg";
import bhk4_14 from "../images/bedroomImages/4bhk_14.jpg";
import bhk4_15 from "../images/bedroomImages/4bhk_15.jpg";
import bhk4_16 from "../images/bedroomImages/4bhk_16.jpg";
import bhk7_1 from "../images/gallaryImages/7bhk_1.jpg";
import bhk7_2 from "../images/gallaryImages/7bhk_2.jpg";
import bhk7_3 from "../images/gallaryImages/7bhk_3.jpg";

function PricingCard() {
  const [open, setOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState(null);

  const pricingOptions = [
    {
      type: "3 BHK",
      price: "4000 INR",
      description:
        "Spacious 3 Bedrooms with Hall and Kitchen with stove and fridge, good stay for family of 8 to 12 people.",
      images: [
        bhk3_1,
        bhk3_2,
        bhk3_3,
        bhk3_4,
        bhk3_5,
        bhk3_6,
        bhk3_7,
        bhk3_8,
        bhk3_9,
        bhk3_10,
        bhk3_11,
      ],
    },
    {
      type: "4 BH",
      price: "5000 INR",
      description:
        "Comfortable 4 Bedrooms with Hall and with all basic facilities for a family of 10 to 16 people.",
      images: [
        bhk4_1,
        bhk4_2,
        bhk4_3,
        bhk4_4,
        bhk4_5,
        bhk4_6,
        bhk4_7,
        bhk4_8,
        bhk4_9,
        bhk4_10,
        bhk4_11,
        bhk4_12,
        bhk4_13,
        bhk4_14,
        bhk4_15,
        bhk4_16,
      ],
    },
    {
      type: "7 BHK",
      price: "8000 INR",
      description:
        "We rent out the whole house for joint families or for travel agency with accomodation of 18 to 40 people.",
      images: [
        bhk3_1,
        bhk3_9,
        bhk3_10,
        bhk3_11,
        bhk4_1,
        bhk4_2,
        bhk4_3,
        bhk4_4,
        bhk4_5,
        bhk4_6,
        bhk7_1,
        bhk7_2,
        bhk7_3,
      ],
    },
    {
      type: "1 BHK",
      price: "1200 INR",
      description:
        "Comfortable 1 bedroom with balcony which is best suitable for singles or couples.",
      images: [bhk4_3, bhk4_4, bhk4_5, bhk4_6],
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
        Please note that the listed prices are for non-A/C accommodations. <b>For
        price negotiations or to confirm your stay</b>, kindly <a href="#contactus">contact us</a> directly.
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
