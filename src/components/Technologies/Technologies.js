import React from 'react';
import { DiCss3, DiFirebase, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the world of web development.
      Focused mainly on frontend engineering but I also have experince working with API's
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            Experince with <br />
            JavaScript and Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Libraries for JavaScript</ListTitle>
          <ListParagraph>
            Experince with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>
            Experince with <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </section>
);

export default Technologies;
