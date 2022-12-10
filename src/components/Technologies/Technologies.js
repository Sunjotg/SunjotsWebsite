import React from 'react';
import { DiCss3, DiFirebase, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <section id="tech">
    <SectionDivider />
    <SectionTitle>Professional Experience:</SectionTitle>
    <SectionText>
      In my 2 years of experince, I have created over 10 solo projects and worked at Aviva Canada as a Front End Engineer. Programming Stack; Javascript, ES6, React, HTML and CSS.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Software Engineer</ListTitle>
          <ListParagraph>
            Experience with: <br />
            JavaScript, Python, <br /> HTML & CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Libraries for JavaScript</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React, <br />
            Jasmine (Unit-Testing)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Tools like Figma, <br />
             Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </section>
);

export default Technologies;
