import "./App.css";
import { ContactUs } from "./Contact.js";
import { EmailBanner } from "./EmailBanner";
import { ExperienceStory } from "./ExperienceStory.js";
import { FooterLinks } from "./FooterLinks.js";
import { Header } from "./Header.js";
import { Projects } from "./Projects";
import { SkillsSection } from "./SkillsSection";

function App() {
  return (
    <>
      <Header />
      <EmailBanner />
      <ExperienceStory />
      <Projects />
      <SkillsSection />
      <ContactUs />
      <FooterLinks />
    </>
  );
}

export default App;
