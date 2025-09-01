import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useLanguage } from "../translation/useLanguage";

const TestimonialsSection = () => {
  const { translations } = useLanguage();
  const testimonials = translations.app.TestimonialsSection.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      style={{
        padding: "60px 20px",
        minHeight: "400px",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          padding={4}
          gutterBottom
          align="center"
          sx={{ marginBottom: 6 }}
        >
          {translations.app.TestimonialsSection.title}
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: -60,
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.1)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
            }}
          >
            <span style={{ fontSize: "20px", width: "25px" }}>‹</span>
          </IconButton>

          <Card
            sx={{
              maxWidth: 600,
              padding: 4,
              textAlign: "center",
              boxShadow: 3,
              minHeight: 300,
            }}
          >
            <CardContent>
              <Avatar
                src={currentTestimonial.picture}
                alt={currentTestimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  margin: "0 auto 24px auto",
                  backgroundColor: "#e0e0e0",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  marginBottom: 3,
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                "{currentTestimonial.quote}"
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {currentTestimonial.name}
              </Typography>
            </CardContent>
          </Card>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -60,
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.1)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
            }}
          >
            <span style={{ fontSize: "20px", width: "25px" }}>›</span>
          </IconButton>
        </Box>

        {/* Dots indicator */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
            gap: 1,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#1976d2" : "#e0e0e0",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
