import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

// Declare gtag global function
declare global {
  function gtag(...args: any[]): void;
}

const ContactPage = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "fertility",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({
          ...prev,
          [field]: false,
        }));
      }
    };

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      phone: !formData.phone.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create form data for Basin
    const formDataToSubmit = new FormData();

    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("inquiryType", formData.inquiryType);

    // Submit to Basin
    fetch("https://usebasin.com/f/8264472cbd9b", {
      method: "POST",
      body: formDataToSubmit,
    })
      .then((response) => {
        if (response.ok) {
          // Send event to Google Analytics
          if (typeof gtag !== "undefined") {
            gtag('event', 'form_submit', {
              event_category: 'contact_form',
              event_label: formData.inquiryType,
              value: 1,
            });
          }

          alert(translations.app.ContactPage.successMessage);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            inquiryType: "fertility",
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(translations.app.ContactPage.errorMessage);
      });
  };

  return (
    <>
      <Navigation />
      <Container sx={{ py: 4, minHeight: "88vh" }}>
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
          {translations.app.ContactPage.title}
        </Typography>

        <Box sx={{ maxWidth: 600, mx: "auto" }}>
          <Box
            sx={{
              p: 4,
              backgroundColor: "#f8f9fa",
              borderRadius: 2,
              border: "1px solid #e9ecef",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              align="center"
              sx={{ mb: 3 }}
            >
              {translations.app.ContactPage.subtitle}
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid size={{ xs: 12 }}>
                <FormControl component="fieldset" sx={{ mt: 2 }}>
                  <FormLabel component="legend" sx={{ mb: 1 }}>
                    {translations.app.ContactPage.inquiryType}
                  </FormLabel>
                  <RadioGroup
                    value={formData.inquiryType}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        inquiryType: event.target.value,
                      }))
                    }
                  >
                    <FormControlLabel
                      value="fertility"
                      control={<Radio />}
                      label={translations.app.ContactPage.fertility}
                    />
                    <FormControlLabel
                      value="gynecology"
                      control={<Radio />}
                      label={translations.app.ContactPage.gynecology}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label={translations.app.ContactPage.other}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label={translations.app.ContactPage.firstName}
                    value={formData.firstName}
                    onChange={handleInputChange("firstName")}
                    error={errors.firstName}
                    helperText={
                      errors.firstName
                        ? translations.app.ContactPage.requiredField
                        : ""
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label={translations.app.ContactPage.lastName}
                    value={formData.lastName}
                    onChange={handleInputChange("lastName")}
                    error={errors.lastName}
                    helperText={
                      errors.lastName
                        ? translations.app.ContactPage.requiredField
                        : ""
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={translations.app.ContactPage.email}
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    error={errors.email}
                    helperText={
                      errors.email
                        ? translations.app.ContactPage.invalidEmail
                        : ""
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label={translations.app.ContactPage.phone}
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    error={errors.phone}
                    helperText={
                      errors.phone
                        ? translations.app.ContactPage.requiredField
                        : ""
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#A76456",
                      color: "#FFFFFF",
                      textTransform: "none",
                      fontFamily: "'HK Grotesk', system-ui, Avenir, Helvetica, Arial, sans-serif",
                      borderRadius: "24px",
                      padding: "12px 24px",
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        backgroundColor: "#A76456",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {translations.app.ContactPage.submit}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
