import './App.css';
import { ContactUs } from './Contact.js';
import { EmailBanner } from './EmailBanner';
import { ExperienceStory } from './ExperienceStory.js';
import { FooterLinks } from './FooterLinks.js';
import { Projects } from './Projects';
import { SkillsSection } from './SkillsSection';

function App() {
  return (
    <>
      <EmailBanner/>
      <ExperienceStory></ExperienceStory>
      <Projects></Projects>
      <SkillsSection></SkillsSection>
      <ContactUs></ContactUs>
      <FooterLinks></FooterLinks>
    </>
  );
}

export default App;
