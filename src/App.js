import "./App.css";
import { ContactUs } from "./Contact.js";
import { EmailBanner } from "./EmailBanner";
import { ExperienceStory } from "./ExperienceStory.js";
import { FooterLinks } from "./FooterLinks.js";
import { Header } from "./Header.js";
import { Projects } from "./Projects";
import { SkillsSection } from "./SkillsSection";
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

function App() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
    <section id="home">
      <Header />
      <EmailBanner />
    </section>
      <ExperienceStory />
      <Projects />
      <SkillsSection />
      <ContactUs />
      <FooterLinks />

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Back to top
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
}

export default App;
