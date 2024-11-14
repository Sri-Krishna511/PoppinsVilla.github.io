import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";

function WelcomeMessage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition: "opacity 1s ease-in-out" },
    exiting: { opacity: 1 },
    exited: { opacity: 0, transition: "opacity 1s ease-in-out" },
  };

  return (
    <CSSTransition in={showMessage} timeout={100}>
      {(state) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            textAlign: "center",
            backgroundColor: "#e0f7fa",
            padding: 3,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            ...transitionStyles[state],
          }}
        >
          <Typography variant="h3" sx={{ mb: 2, color: "#00796b" }}>
            Welcome to Our Website!
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: "#004d40" }}>
            We’re thrilled to have you here. Get ready to explore something
            special!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00796b",
              "&:hover": { backgroundColor: "#004d40" },
            }}
            onClick={() => alert("Happy to see you here!")}
          >
            Start Exploring
          </Button>
        </Box>
      )}
    </CSSTransition>
  );
}

export default WelcomeMessage;
