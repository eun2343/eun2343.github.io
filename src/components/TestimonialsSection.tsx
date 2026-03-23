
import { Container, Typography, Card, CardContent } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          style={{ paddingBottom: "34px" }}
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
                  backgroundColor: "#FFF5F0",
                }}
              >
                <CardContent>
                  <Typography
                    component="div"
                    aria-label="5 star rating"
                    sx={{
                      margin: "0 auto 20px auto",
                      fontSize: { xs: "3rem", sm: "1.5rem" },
                      fontWeight: 900,
                      letterSpacing: "0.2rem",
                      color: "#FFBF00",
                      lineHeight: 1,
                      textShadow: { xs: "0 0 1px #B8860B, 0 1px 0 #B8860B", sm: "none" },
                      WebkitTextStroke: { xs: "0.35px #B8860B", sm: "0" },
                    }}
                  >
                    {'★★★★★'}
                  </Typography>

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
