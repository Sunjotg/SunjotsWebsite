import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Self created projects on Github'},
  { number: 4, text: 'Certificates from coding bootcamps (Scrimba & Meta FrontEnd)', },
  { number: 5, text: 'Experience in programming languages', },
  { number: 2, text: 'Years of real-world programming experience', }
];

const Acomplishments = () => (
  <section>
    <SectionTitle>My Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <box key={index} >
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </box>
      ))}
    </Boxes>
  </section>
);

export default Acomplishments;
