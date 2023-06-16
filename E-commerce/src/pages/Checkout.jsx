import {
  Container,
  Paper,
  Stepper,
  Typography,
  Step,
  StepLabel,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import PaymentsForm from "../components/PaymentsForm";
import ReviewForm from "../components/ReviewForm";

const steps = ["Shipping Address", "Payment Details", "Review Order"];

function getStepContent(activeStep) {
  switch (activeStep) {
    case 0:
      return <AddressForm/>;
    case 1:
      return <PaymentsForm/>
    case 2:
      return <ReviewForm/>
    default:
      throw new Error("Unknown Step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  
  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        mb: 4,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          P: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          display="flex"
          justifyContent="center"
        >
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            {" "}
            <Typography variant="h5" gutterBottom>
              Thank you for your Order
            </Typography>
            <Typography variant="h5" gutterBottom>
              Your order Number is #132. We have emailed you the details
              regarding order confirmation
            </Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && 
                <Button sx={{mt:3 , ml:1,}} onClick={handleBack} variant="contained">
                  Back
                </Button>
              }
              <Button sx={{mt:3 , ml:1,}} onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "Place Order" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}
