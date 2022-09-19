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
      Greetings! My name is Sunjot, I previously studied Criminology at York University. In 2021, I decided to make a shift towards a profession I am passionate about. After completing 2 bootcamps (Scrimba & Meta Frontend). I have gained knowledge and the skills to be proficient in; JavaScript, React, HTML, and CSS.
      </SectionText>
      <Button onClick={() => window.location = '#about'} >More About Me</Button>
    </LeftSection>
  </section>
);

export default Hero;