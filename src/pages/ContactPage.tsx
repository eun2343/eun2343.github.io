import { Container, Typography, Box } from "@mui/material";
import { useLanguage } from "../translation/useLanguage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ContactPage = () => {
  const { translations, language } = useLanguage();
  const subtitle = translations.app.ContactPage.subtitle;
  const boldPrefix = "We accept new patients through this contact form only.";
  const [leadingSentence, trailingText] = subtitle.split("\n");
  const hasSms = trailingText?.includes("SMS") ?? false;
  const trailingTextParts = hasSms ? trailingText.split("SMS") : [trailingText ?? ""];
  const trailingAfterSms = trailingTextParts.slice(1).join("SMS");
  const arrangeToken = " to arrange";
  const arrangeIndex = language === "de" ? -1 : trailingAfterSms.indexOf(arrangeToken);
  const beforeArrange =
    arrangeIndex >= 0 ? trailingAfterSms.slice(0, arrangeIndex) : trailingAfterSms;
  const fromArrange =
    arrangeIndex >= 0 ? trailingAfterSms.slice(arrangeIndex + 1) : "";
  const formConfig =
    language === "de"
      ? {
          scriptSrc: "https://js-eu1.hsforms.net/forms/embed/147121459.js",
          formId: "ee93addb-7231-44ba-8c10-3297ee71778c",
        }
      : {
          scriptSrc: "https://js-eu1.hsforms.net/forms/embed/147121459.js",
          formId: "88af95cd-b6cc-43c1-8385-67c962ef5bc4",
        };

  useEffect(() => {
    const script = document.createElement("script");
    script.id = `hubspot-book-appointment-embed-${language}`;
    script.src = formConfig.scriptSrc;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [language, formConfig.scriptSrc]);

  return (
    <>
      <Navigation logoScale={0.8} barHeightScale={0.8} />
      <Container sx={{ py: { xs: 3, sm: 4 }, minHeight: "88vh" }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.5rem", md: "2.8rem" },
            fontWeight: 700,
            fontFamily: "'Lora', serif",
            color: "#000000",
            mt: { xs: 1.5, sm: 2.5 },
            mb: { xs: 5, sm: 6 },
          }}
        >
          {translations.app.ContactPage.title}
        </Typography>

        <Box sx={{ maxWidth: 960, mx: "auto" }}>
          <Box
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              backgroundColor: "#FFF5F0",
              borderRadius: 2,
              border: "1px solid #e9ecef",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              align="center"
              sx={{ mb: 3, lineHeight: 1.6 }}
            >
              <Box
                component="strong"
                sx={{ color: "#1f5aa6", display: "block", mb: 1.25 }}
              >
                {leadingSentence || boldPrefix}
              </Box>
              {trailingText ? (
                <>
                  {hasSms ? (
                    <>
                      {trailingTextParts[0]}
                      <strong style={{ color: "#1f5aa6" }}>SMS</strong>
                      {beforeArrange}
                      {fromArrange ? (
                        <>
                          <br />
                          {fromArrange}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    trailingText
                  )}
                </>
              ) : (
                ""
              )}
            </Typography>

            <Box className="iframe-container" sx={{ mt: 3 }}>
              <div
                key={formConfig.formId}
                className="hs-form-frame"
                data-region="eu1"
                data-form-id={formConfig.formId}
                data-portal-id="147121459"
              ></div>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
