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
      <h3>Who is Sunjot Grewal?</h3>
      <SectionText>
      A York University graduate with a bachelor's degree. A self taught Software Engineer with 2 years of real world experince. Preferred languages: JavaScript/ES6, Python, React, Jasmine(unit-testing), HTML, and CSS.
      </SectionText>
      <Button onClick={() => window.location = '#about'} >More About Me</Button>
    </LeftSection>
  </section>
);

export default Hero;