import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

// Image Slideshow Component
function ImageSlideShow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        // width: "100%",
        maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "1200px" },
        height: { xs: "auto", md: "400px" }, // Adjust for smaller screens
        padding: "20px", // Adds consistent padding around the image
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        justifySelf: "center",
        margin: "0 auto", // Center the component on the page
      }}
    >
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill", // Ensures the image scales within container without stretching
        }}
      />
    </Box>
  );
}

// Main Component
export default ImageSlideShow;
