import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper CSS
import "swiper/swiper.css";

const TestimonialsSection = () => {
  const { translations } = useLanguage();
  const testimonials = translations.app.TestimonialsSection.testimonials;

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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          centeredSlides={true}
          style={{ paddingBottom: "50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  padding: 4,
                  textAlign: "center",
                  boxShadow: 3,
                  minHeight: 300,
                  margin: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <CardContent>
                  <Avatar
                    src={testimonial.picture}
                    alt={testimonial.name}
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
                    "{testimonial.quote}"
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
