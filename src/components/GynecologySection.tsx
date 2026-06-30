
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../translation/useLanguage";
import { getLocalizedPath } from "../utils/routes";
import styles from "./GynecologySection.module.css";
import "../styles/utilities.css";
import "../styles/variables.css";

const GynecologySection = () => {
  const { translations, language } = useLanguage();
  const gynecologyServices = translations.app.HomePage.gynecologyItems;
  const [isPainfulPeriodOpen, setIsPainfulPeriodOpen] = useState(false);
  const [isPCOSOpen, setIsPCOSOpen] = useState(false);
  const [isEndometriosisMyomaOpen, setIsEndometriosisMyomaOpen] = useState(false);
  const [isPMSOpen, setIsPMSOpen] = useState(false);
  const [isPrematureOvarianFailureOpen, setIsPrematureOvarianFailureOpen] = useState(false);
  const [isThyroidDysfunctionOpen, setIsThyroidDysfunctionOpen] = useState(false);
  const [isStressAnxietyOpen, setIsStressAnxietyOpen] = useState(false);
  const [isMenopauseOpen, setIsMenopauseOpen] = useState(false);

  const painfulPeriodDescription =
    language === "de"
      ? [
          "Wenn Ihr Zyklus unregelmässig ist oder starke Schmerzen verursacht, ist das meist ein Zeichen dafür, dass der natürliche Rhythmus Ihres Körpers gestört ist.",
          "In der TCM weisen diese Symptome häufig auf einen Mangel an gleichmässigem Blutfluss oder auf unzureichende Energie (Qi) hin, die die Fortpflanzungsorgane versorgt.",
          "Durch den Fokus auf gesunde Zirkulation und die Regulierung hormoneller Prozesse helfen TCM-Behandlungen wie Akupunktur und individuell abgestimmte Kräuterrezepturen dabei, einen vorhersehbaren, angenehmen und stressfreien Monatszyklus zu fördern.",
        ]
      : [
          "When your cycle is off-schedule or causes intense pain, it is usually a sign that your body’s natural rhythm is disrupted.",
          "In TCM, these symptoms often point to a lack of smooth blood flow or insufficient energy (Qi) nourishing the reproductive organs.",
          "By focusing on promoting healthy circulation and regulating your hormone pathways, TCM treatments like acupuncture and custom herbal formulas work to create a predictable, comfortable, and stress-free monthly cycle.",
        ];

  const pcosDescription =
    language === "de"
      ? [
          "PCOS/PMOS ist eine stoffwechsel- und hormonelle Dysbalance, die den Eisprung stören und das Schwangerwerden erschweren kann.",
          "In der TCM wird PCOS/PMOS als Kombination aus träger Stoffwechselflüssigkeit (häufig als \"Feuchtigkeit\" bezeichnet) und einer gestörten Kommunikation zwischen Gehirn und Eierstöcken betrachtet.",
          "Unser Ansatz konzentriert sich darauf, den gesunden Eisprung zu aktivieren, die Insulinsensitivität zu verbessern und diese metabolische Stagnation zu lösen, damit Ihr Körper den Zyklus auf natürliche Weise regulieren kann.",
        ]
      : [
          "PCOS/PMOS is a metabolic and hormonal imbalance that can disrupt ovulation and make conceiving difficult.",
          "TCM views PCOS/PMOS as a combination of sluggish metabolic fluid (often referred to as \"dampness\") and a breakdown in the communication between your brain and ovaries.",
          "Our approach focuses on awakening healthy ovulation, improving insulin sensitivity, and clearing out that metabolic stagnation to help your body naturally regulate its cycle.",
        ];

    const endometriosisMyomaDescription =
      language === "de"
        ? [
            "Wenn Sie künftig eine Familie gründen möchten, erfordert der Umgang mit Endometriose oder Myomen einen durchdachten Ansatz. Eine Operation ist nicht immer der einzige oder erste Schritt.",
            "Die TCM behandelt diese Beschwerden sanft, aber konsequent als \"Blutstagnation\" - Bereiche, in denen die Becken-Durchblutung blockiert ist.",
            "Mit gezielten Therapien zur Lösung dieser Stagnation, zur Entzündungsreduktion und zur Optimierung der Durchblutung der Gebärmutter helfen wir, Schmerzen zu lindern und eine gesunde Gebärmutterschleimhaut zu unterstützen.",
          ]
        : [
            "If you are planning to grow your family in the future, managing endometriosis or myomas requires a thoughtful approach. Surgery is not always the only or first step.",
            "TCM gently but firmly addresses these conditions by treating them as \"blood stagnation\", areas where pelvic circulation has become blocked.",
            "By using targeted therapies to break up this stagnation, reduce inflammation, and optimize blood flow to the uterus, we help manage pain and support a healthy uterine lining.",
          ];

    const pmsDescription =
      language === "de"
        ? [
            "Stimmungsschwankungen, Blähungen, Brustspannen und Heisshunger in den Tagen vor der Periode sind klare Zeichen einer hormonellen Achterbahnfahrt.",
            "Aus Sicht der TCM ist das Leber-System für den freien Fluss von Emotionen und Energie verantwortlich, und Stress kann diesen Fluss vor der Periode leicht blockieren.",
            "Wir konzentrieren uns darauf, diese Spannung zu lösen, das Nervensystem zu beruhigen und Ihre Hormone auszugleichen, damit Sie sanft und ohne monatliche Störungen durch Ihren Zyklus gehen können.",
          ]
        : [
            "Mood swings, bloating, breast tenderness, and cravings in the days before your period are clear signs of a hormonal roller coaster.",
            "From a TCM perspective, the Liver system is responsible for the smooth flow of emotions and energy, and stress easily causes it to lock up before your period.",
            "We focus on relaxing this tension, soothing the nervous system, and balancing your hormones so you can transition through your cycle smoothly without the monthly disruptions.",
          ];

  const prematureOvarianFailureDescription =
    language === "de"
      ? [
          "Mit einem früheren als erwartet eintretenden Rückgang der Eierstockfunktion konfrontiert zu sein, kann sich überwältigend anfühlen, aber die TCM bietet tiefe, nährende Unterstützung für Ihre verbleibenden Eizellen.",
          "Wir betrachten diesen Zustand als Erschöpfung Ihrer tiefen konstitutionellen Energie (der Nieren-Essenz), die das reproduktive Altern steuert.",
          "Durch tiefgreifende nährende Kräutertherapie und gezielte Akupunktur arbeiten wir daran, die Becken-Blutversorgung zu bereichern, die Eizellqualität zu optimieren und das natürliche reproduktive Potenzial Ihres Körpers zu maximieren.",
        ]
      : [
          "Facing a decline in ovarian function earlier than expected can feel overwhelming, but TCM offers deep, nurturing support for your remaining eggs.",
          "We view this condition as a depletion of your body's deep constitutional energy (the Kidney Essence), which governs reproductive aging.",
          "Through deeply nourishing herbal therapy and targeted acupuncture, we work to enrich the pelvic blood supply, optimize egg quality, and maximize your body's natural reproductive potential.",
        ];

  const thyroidDysfunctionDescription =
    language === "de"
      ? [
          "Ihre Schilddrüse fungiert als Thermostat Ihres Körpers, und ob sie träge (Hypo) oder überaktiv (Hyper) ist, kann Ihre Fruchtbarkeit und Ihren Menstruationszyklus völlig lahmlegen.",
          "Die TCM behandelt Schilddrüsenprobleme, indem sie das zugrunde liegende Gleichgewicht zwischen der wärmenden Energie Ihres Körpers (Yang) und den kühlenden Flüssigkeiten (Yin) wiederherstellt.",
          "Durch Regulierung dieser metabolischen Grundlage und Verringerung von Autoimmun-Entzündungen helfen wir, Ihre Energie, Stimmung und hormonelle Gesundheit zu stabilisieren.",
        ]
      : [
          "Your thyroid acts as your body's master thermostat, and whether it is sluggish (hypo) or overactive (hyper), it can completely stall your fertility and menstrual cycle.",
          "TCM addresses thyroid issues by restoring the underlying balance between your body's warming energy (Yang) and cooling fluids (Yin).",
          "By regulating this metabolic foundation and reducing autoimmune inflammation, we help stabilize your energy, moods, and hormonal health.",
        ];

  const stressAnxietyDescription =
    language === "de"
      ? [
          "Hoher Stress erschöpft nicht nur Ihren Geist; er signalisiert aktiv Ihrem Gehirn, die Fortpflanzungshormone zu reduzieren, was das Schwangerwerden erschwert.",
          "In unserer Klinik behandeln wir Stress und Angst nicht als Nachgedanke, sondern als einen primären Pfeiler der Fruchtbarkeitsbegleitung.",
          "Akupunktur ist hervorragend darin, Ihr Nervensystem aus dem \"Kampf-oder-Flucht\"-Modus in einen tiefgreifend entspannten Zustand zu versetzen, den Cortisolspiegel zu senken und den vitalen Blutfluss zu öffnen, den Ihr Fortpflanzungssystem zum Gedeihen braucht.",
        ]
      : [
          "High stress doesn't just exhaust your mind; it actively signals your brain to downregulate reproductive hormones, making it harder to conceive.",
          "In our clinic, we treat stress and anxiety not as an afterthought, but as a primary pillar of fertility care.",
          "Acupuncture excels at shifting your nervous system out of \"fight-or-flight\" and into a deeply relaxed state, lowering cortisol levels and opening up the vital blood flow your reproductive system needs to thrive.",
        ];

  const menopauseDescription =
    language === "de"
      ? [
          "Die Menopause ist eine natürliche Übergangsphase, aber Hitzewallungen, Nächtliches Schwitzen, Schlaflosigkeit und Stimmungsschwankungen können sie unglaublich unangenehm machen.",
          "Die TCM betrachtet diese Phase als eine natürliche Veränderung, bei der die kühlenden, erdenden Flüssigkeiten des Körpers natürlich abnehmen.",
          "Unsere Behandlungen konzentrieren sich darauf, diese innere Hitze sanft abzukühlen, die tiefgreifenden Reserven Ihres Körpers zu ergänzen und hormonelle Schwankungen auszugleichen, damit Sie diese Übergangsphase mit Anmut, Komfort und Vitalität durchleben können.",
        ]
      : [
          "Menopause is a natural transition, but hot flashes, night sweats, insomnia, and mood changes can make it incredibly uncomfortable.",
          "TCM views this phase as a natural shift where the body's cooling, grounding fluids naturally decrease.",
          "Our treatments focus on gently cooling off that internal heat, replenishing your body's deep reserves, and smoothing out hormonal fluctuations so you can navigate this transition with grace, comfort, and vitality.",
        ];

  const handleServiceClick = (index: number) => {
    if (index === 0) {
      setIsPainfulPeriodOpen((prev) => !prev);
    }
    if (index === 1) {
      setIsPCOSOpen((prev) => !prev);
    }
    if (index === 2) {
      setIsEndometriosisMyomaOpen((prev) => !prev);
    }
    if (index === 3) {
      setIsPMSOpen((prev) => !prev);
    }
    if (index === 4) {
      setIsPrematureOvarianFailureOpen((prev) => !prev);
    }
    if (index === 5) {
      setIsThyroidDysfunctionOpen((prev) => !prev);
    }
    if (index === 6) {
      setIsStressAnxietyOpen((prev) => !prev);
    }
    if (index === 7) {
      setIsMenopauseOpen((prev) => !prev);
    }
  };

  return (
    <div className={styles.root}>
      <Container>
        <h2 className={`headingLarge textCenter ${styles.sectionTitle}`}>{translations.app.GynecologySection.title}</h2>
        <div className={styles.serviceList}>
          {gynecologyServices.map((service, index) => (
            <div key={index}>
              <div
                className={`${styles.serviceItem} ${
                  (index === 0 && isPainfulPeriodOpen) ||
                  (index === 1 && isPCOSOpen) ||
                  (index === 2 && isEndometriosisMyomaOpen) ||
                  (index === 3 && isPMSOpen) ||
                  (index === 4 && isPrematureOvarianFailureOpen) ||
                  (index === 5 && isThyroidDysfunctionOpen) ||
                  (index === 6 && isStressAnxietyOpen) ||
                  (index === 7 && isMenopauseOpen)
                    ? styles.expanded
                    : ""
                }`}
                role={index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 ? "button" : undefined}
                tabIndex={index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 ? 0 : -1}
                onClick={() => handleServiceClick(index)}
                onKeyDown={(event) => {
                  if ((index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7) && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    handleServiceClick(index);
                  }
                }}
                aria-expanded={
                  index === 0
                    ? isPainfulPeriodOpen
                    : index === 1
                    ? isPCOSOpen
                    : index === 2
                    ? isEndometriosisMyomaOpen
                    : index === 3
                    ? isPMSOpen
                    : index === 4
                    ? isPrematureOvarianFailureOpen
                    : index === 5
                    ? isThyroidDysfunctionOpen
                    : index === 6
                    ? isStressAnxietyOpen
                    : index === 7
                    ? isMenopauseOpen
                    : undefined
                }
              >
                <h3 className="headingMedium">{service}</h3>
                <span className={styles.chevron} />
              </div>
              {index === 0 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isPainfulPeriodOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{painfulPeriodDescription[0]}</p>
                    <p>{painfulPeriodDescription[1]}</p>
                    <p>{painfulPeriodDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isPCOSOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{pcosDescription[0]}</p>
                    <p>{pcosDescription[1]}</p>
                    <p>{pcosDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isEndometriosisMyomaOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{endometriosisMyomaDescription[0]}</p>
                    <p>{endometriosisMyomaDescription[1]}</p>
                    <p>{endometriosisMyomaDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isPMSOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{pmsDescription[0]}</p>
                    <p>{pmsDescription[1]}</p>
                    <p>{pmsDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isPrematureOvarianFailureOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{prematureOvarianFailureDescription[0]}</p>
                    <p>{prematureOvarianFailureDescription[1]}</p>
                    <p>{prematureOvarianFailureDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isThyroidDysfunctionOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{thyroidDysfunctionDescription[0]}</p>
                    <p>{thyroidDysfunctionDescription[1]}</p>
                    <p>{thyroidDysfunctionDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 6 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isStressAnxietyOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{stressAnxietyDescription[0]}</p>
                    <p>{stressAnxietyDescription[1]}</p>
                    <p>{stressAnxietyDescription[2]}</p>
                  </div>
                </div>
              )}
              {index === 7 && (
                <div
                  className={`${styles.descriptionWrapper} ${
                    isMenopauseOpen ? styles.descriptionOpen : ""
                  }`}
                >
                  <div className={styles.descriptionContent}>
                    <p>{menopauseDescription[0]}</p>
                    <p>{menopauseDescription[1]}</p>
                    <p>{menopauseDescription[2]}</p>
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

export default GynecologySection;
