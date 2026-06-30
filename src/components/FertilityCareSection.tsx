
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../translation/useLanguage";
import { getLocalizedPath } from "../utils/routes";
import styles from "./FertilityCareSection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const FertilityCareSection = () => {
  const { translations, language } = useLanguage();
  const fertilityServices = translations.app.FertilityCareSection.services;
  const [isNaturalPregnancyOpen, setIsNaturalPregnancyOpen] = useState(false);
  const [isIVFOpen, setIsIVFOpen] = useState(false);
  const [isDonorOpen, setIsDonorOpen] = useState(false);
  const [isOverFortyOpen, setIsOverFortyOpen] = useState(false);
  const [isMaleFertilityOpen, setIsMaleFertilityOpen] = useState(false);
  const [isLowAMHOpen, setIsLowAMHOpen] = useState(false);
  const [isRepeatedMiscarriagesOpen, setIsRepeatedMiscarriagesOpen] = useState(false);
  const [isSocialFreezingOpen, setIsSocialFreezingOpen] = useState(false);

  const naturalPregnancyDescription =
    language === "de"
      ? [
          "Ich werde Ihre Gesundheitsgeschichte und Ihren Kinderwunschweg im ganzheitlichen Ansatz der TCM betrachten. Falls erforderlich, kann ich einige grundlegende Fruchtbarkeitstests empfehlen, um besser zu verstehen, was vorliegt.",
          "Wir arbeiten daran, zugrunde liegende Ursachen und Zyklusbeschwerden zu behandeln und gleichzeitig die Eizellqualität und die reproduktive Funktion durch eine verbesserte Durchblutung der Eierstöcke und der Gebärmutter mit Akupunktur und Kräutermedizin zu unterstützen.",
        ]
      : [
          "I'll review your health history and fertility journey through the holistic approach of TCM. If needed, I may recommend some basic fertility testing to better understand what's going on.",
          "We'll work on addressing underlying causes and menstrual symptoms while supporting egg quality and reproductive function through improved blood circulation to the ovaries and uterus with acupuncture and herbal medicine.",
        ];

  const ivfDescription =
    language === "de"
      ? [
          "Bereiten Sie Ihren Körper vor, bevor Sie mit IVF oder IUI beginnen. Mindestens 2–3 Monate werden empfohlen, da Eizellen etwa drei Monate benötigen, um ihre letzte Entwicklungsphase abzuschließen – und genau diesen Zeitraum möchten wir mit der Behandlung unterstützen und verbessern.",
          "TCM kann IVF und IUI in jeder Phase ergänzen, indem sie Stress reduziert, die Durchblutung verbessert, Hormone reguliert und die allgemeine reproduktive Gesundheit neben der assistierten Reproduktion unterstützt.",
        ]
      : [
          "Prepare your body before starting IVF or IUI.",
          "A minimum of 2–3 months is recommended, as eggs take about three months to complete their final stage of development, and this is the period we aim to support and improve with treatment.",
          "TCM can complement IVF and IUI at every stage by helping reduce stress, improve circulation, regulate hormones, and support overall reproductive health alongside assisted reproduction.",
        ];

  const donorDescription =
    language === "de"
      ? [
          "Die Entscheidung, Spender-Eizellen, -Spermien oder -Embryonen zu nutzen, ist nicht leicht.",
          "Jedes Land hat unterschiedliche Regelungen, und es gibt weit mehr zu berucksichtigen als nur eine IVF-Behandlung. Ich verstehe die emotionalen und praktischen Herausforderungen und begleite und unterstutze Sie auf Ihrem Weg zur Familiengrundung.",
        ]
      : [
          "Deciding to use donor gametes is a tough decision.",
          "Every country has different regulations, and there is much more to consider than simply undergoing IVF. I understand the emotional and practical challenges involved, and I'm here to help guide and support you through the journey toward building your family.",
        ];

  const maleFertilityDescription =
    language === "de"
      ? [
          "Spermien sind oft gut beeinflussbar.",
          "Mit dem richtigen Ansatz und je nach individueller Situation kann sich die Spermienqualitat innerhalb von drei Monaten deutlich verbessern.",
          "Ein Embryo besteht zu 50 % aus Spermien. Die Spermienqualitat spielt eine grosse Rolle bei Schwierigkeiten schwanger zu werden, wiederholten Fehlgeburten und Implantationsversagen. Eine niedrige Spermienqualitat sollte nicht unterschatzt werden. Wir identifizieren mogliche negative Einflussfaktoren und verbessern die Qualitat mit Akupunktur und Krautermedizin.",
        ]
      : [
          "Sperms are quite straightforward.",
          "With the right approach and depending on individual circumstances, sperm quality can improve significantly within three months.",
          "An embryo is 50% sperm. Sperm quality plays a big role in difficulty conceiving, repeated miscarriages, and implantation failure. Don't overlook low sperm quality. We'll identify possible factors that may negatively affect sperm quality and work to improve it through acupuncture and herbal medicine.",
        ];

  const overFortyDescription =
    language === "de"
      ? [
          "Die Fruchtbarkeit ab 40 bringt besondere Anforderungen mit sich, da sowohl die Eizellqualitat als auch die ovarielle Reserve naturlich abnehmen, wahrend die Hormonbalance und die Zyklusregelmassigkeit schwankender werden konnen.",
          "Die TCM konzentriert sich darauf, diese Lebensphase zu unterstutzen, indem sie die Nierenenergie starkt, die Durchblutung der Eierstocke und der Gebarmutter verbessert, Hormone reguliert und die allgemeine Vitalitat fordert. Die Behandlung wird stets an Ihre individuelle Konstitution angepasst und hilft, die reproduktive Gesundheit zu optimieren sowie Energie, Schlaf und emotionales Wohlbefinden auf Ihrem Kinderwunschweg zu unterstutzen.",
        ]
      : [
          "Fertility after 40 comes with unique needs as both egg quality and ovarian reserve naturally decline, while hormone balance and cycle regularity may become more variable.",
          "TCM focuses on supporting this stage of life by nourishing kidney energy, improving blood circulation to the ovaries and uterus, regulating hormones, and supporting overall vitality. Treatment is always tailored to your individual constitution, helping to optimize reproductive health while also supporting energy, sleep, and emotional wellbeing throughout your fertility journey.",
        ];

  const lowAMHDescription =
    language === "de"
      ? [
          "Ein niedriger AMH-Wert kann zwar auf eine verringerte ovarielle Reserve hinweisen, sagt jedoch nichts uber die Qualitat der Eizellen aus.",
          "Wir konzentrieren uns darauf, die Eizellqualitat zu unterstutzen, die Durchblutung der Eierstocke und der Gebarmutter zu verbessern, Hormone auszugleichen und die allgemeine reproduktive Gesundheit zu optimieren. Durch Akupunktur, Krautermedizin und Lebensstilbegleitung wollen wir Ihrem Korper helfen, bestmoglich zu funktionieren und Ihre Chancen auf eine naturliche Empfagnis oder eine erfolgreiche IVF zu verbessern.",
        ]
      : [
          "While a low AMH can indicate reduced ovarian reserve, it doesn't reveal anything about the quality of eggs.",
          "We focus on supporting egg quality, improving blood circulation to the ovaries and uterus, balancing hormones, and optimizing overall reproductive health. Through acupuncture, herbal medicine, and lifestyle support, we aim to help your body function at its best and improve your chances of conception naturally or alongside IVF treatment.",
        ];

  const repeatedMiscarriagesDescription =
    language === "de"
      ? [
          "Wiederholte Fehlgeburten konnen verwirrend und zutiefst belastend sein, ganz zu schweigen von der erheblichen korperlichen und emotionalen Belastung.",
          "Wir konzentrieren uns darauf, zugrunde liegende Ursachen aus TCM-Perspektive zu identifizieren, den Korper zu starken, die Gebarmuttergesundheit zu unterstutzen und die Bedingungen fur eine gesunde Schwangerschaft zu verbessern, sodass sich die Chancen auf eine gesunde Lebendgeburt erhohen.",
        ]
      : [
          "Repeated miscarriages can be confusing and deeply distressing, not to mention the significant physical and emotional toll they take.",
          "We focus on identifying underlying causes from TCM perspective and strengthen the body, support uterine health and improve conditions for maintaining a healthy pregnancy so that it increases the chances of a healthy live birth.",
        ];

  const socialFreezingDescription =
    language === "de"
      ? [
          "Das Einfrieren von Eizellen ist eine grosse Entscheidung.",
          "Ob Sie fur den kunftigen Familienaufbau vorausplanen oder Ihre Fruchtbarkeit aus personlichen Grunden erhalten mochten: TCM kann Ihren Korper vor und wahrend dem Social Freezing unterstutzen. Die Behandlungen konzentrieren sich darauf, die reproduktive Gesundheit zu optimieren, Stress zu reduzieren und den Korper auf den Einfrierprozess vorzubereiten.",
        ]
      : [
          "Freezing your eggs is a big decision.",
          "Whether you are planning ahead for future family building or preserving fertility for personal reasons, TCM can support your body before and during egg freezing. Treatments focus on optimizing reproductive health, reducing stress, and helping prepare the body for the freezing process.",
        ];

  const handleServiceClick = (index: number) => {
    if (index === 0) setIsNaturalPregnancyOpen((prev) => !prev);
    if (index === 1) setIsIVFOpen((prev) => !prev);
    if (index === 2) setIsDonorOpen((prev) => !prev);
    if (index === 3) setIsOverFortyOpen((prev) => !prev);
    if (index === 4) setIsMaleFertilityOpen((prev) => !prev);
    if (index === 5) setIsLowAMHOpen((prev) => !prev);
    if (index === 6) setIsRepeatedMiscarriagesOpen((prev) => !prev);
    if (index === 7) setIsSocialFreezingOpen((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <Container>
        <h2 className={`headingLarge textCenter ${styles.sectionTitle}`}>
          {language === "en" ? (
            <>
              Advanced{" "}
              <br className={styles.mobileOnlyBreak} />
              Fertility Support
            </>
          ) : (
            translations.app.FertilityCareSection.title
          )}
        </h2>
        <div className={styles.serviceList}>
          {fertilityServices.map((service, index) => (
            <div key={index}>
              <div
                className={`${styles.serviceItem} ${
                  (index === 0 && isNaturalPregnancyOpen) ||
                  (index === 1 && isIVFOpen) ||
                  (index === 2 && isDonorOpen) ||
                  (index === 3 && isOverFortyOpen) ||
                  (index === 4 && isMaleFertilityOpen) ||
                  (index === 5 && isLowAMHOpen) ||
                  (index === 6 && isRepeatedMiscarriagesOpen) ||
                  (index === 7 && isSocialFreezingOpen)
                    ? styles.expanded
                    : ""
                }`}
                role={
                  index === 0 ||
                  index === 1 ||
                  index === 2 ||
                  index === 3 ||
                  index === 4 ||
                  index === 5 ||
                  index === 6 ||
                  index === 7
                    ? "button"
                    : undefined
                }
                tabIndex={
                  index === 0 ||
                  index === 1 ||
                  index === 2 ||
                  index === 3 ||
                  index === 4 ||
                  index === 5 ||
                  index === 6 ||
                  index === 7
                    ? 0
                    : -1
                }
                onClick={() => handleServiceClick(index)}
                onKeyDown={(event) => {
                  if (
                    (index === 0 ||
                      index === 1 ||
                      index === 2 ||
                      index === 3 ||
                      index === 4 ||
                      index === 5 ||
                      index === 6 ||
                      index === 7) &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
                    event.preventDefault();
                    handleServiceClick(index);
                  }
                }}
                aria-expanded={
                  index === 0
                    ? isNaturalPregnancyOpen
                    : index === 1
                    ? isIVFOpen
                    : index === 2
                    ? isDonorOpen
                    : index === 3
                    ? isOverFortyOpen
                    : index === 4
                    ? isMaleFertilityOpen
                    : index === 5
                    ? isLowAMHOpen
                    : index === 6
                    ? isRepeatedMiscarriagesOpen
                    : index === 7
                    ? isSocialFreezingOpen
                    : undefined
                }
              >
                <h3 className="headingMedium">{service}</h3>
                <span className={styles.chevron} />
              </div>
              {index === 0 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isNaturalPregnancyOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{naturalPregnancyDescription[0]}</p>
                    <p>{naturalPregnancyDescription[1]}</p>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isIVFOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{ivfDescription[0]}</p>
                    <p>{ivfDescription[1]}</p>
                    <p>{ivfDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isDonorOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{donorDescription[0]}</p>
                    <p>{donorDescription[1]}</p>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isOverFortyOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{overFortyDescription[0]}</p>
                    <p>{overFortyDescription[1]}</p>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isMaleFertilityOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{maleFertilityDescription[0]}</p>
                    <p>{maleFertilityDescription[1]}</p>
                    <p>{maleFertilityDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isLowAMHOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{lowAMHDescription[0]}</p>
                    <p>{lowAMHDescription[1]}</p>
                  </div>
                </div>
              )}
              {index === 6 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isRepeatedMiscarriagesOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{repeatedMiscarriagesDescription[0]}</p>
                    <p>{repeatedMiscarriagesDescription[1]}</p>
                  </div>
                </div>
              )}
              {index === 7 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isSocialFreezingOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{socialFreezingDescription[0]}</p>
                    <p>{socialFreezingDescription[1]}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.bookButtonWrapper}>
          <Button
            component={Link}
            to={getLocalizedPath("contact", language)}
            variant="contained"
            sx={{
              backgroundColor: "#A6463D",
              color: "#FFFFFF",
              textTransform: "none",
              borderRadius: "12px",
              padding: "10px 24px",
              width: { xs: "80%", sm: "200px" },
              fontSize: "1rem !important",
              "&:hover": { backgroundColor: "#8f3830" },
            }}
            className="fontMain"
          >
            {translations.app.Navigation.bookAppointment}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FertilityCareSection;
