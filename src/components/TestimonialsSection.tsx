
import { Container, Typography, Card, CardContent, Avatar } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./TestimonialsSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const TestimonialsSection = () => {
  const { translations } = useLanguage();
  const testimonials = translations.app.TestimonialsSection.testimonials;

  return (
    <div className={styles.root}>
      <Container maxWidth="md">
        <h2 className="headingLarge textCenter mb-8">{translations.app.TestimonialsSection.title}</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          style={{ paddingBottom: "50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                className="card23"
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
