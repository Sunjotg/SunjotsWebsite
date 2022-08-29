import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello! My name is Sunjot Grewal and I am a Criminology student who turned into a self taught software engineer skilled in; JavaScript, React, HTML, and CSS
      </SectionText>
      <Button onClick={() => window.location = href= "#projects"} >More About Me</Button>
    </LeftSection>
  </section>
);

export default Hero;