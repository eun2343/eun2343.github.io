import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

const BookAppointmentPage = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Navigation />
      <Container sx={{ py: 4, minHeight: "80vh" }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            mb: 4,
          }}
        >
          {translations.app.Navigation.bookAppointment}
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: { xs: "600px", md: "800px" },

            overflow: "hidden",
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSddi5BMTFKs76sAfmc1ToThQTO86wBcQza10gulEBLua8cNIQ/viewform?embedded=true"
            width="100%"
            height="1800px"
            title="Book Appointment Form"
            style={{
              border: "none",
            }}
          >
            Loading…
          </iframe>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default BookAppointmentPage;
