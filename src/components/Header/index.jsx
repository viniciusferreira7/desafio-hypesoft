import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Navigation } from '../Navigation';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { Button } from '../Button';

export const Header = ({ links = [], title = [] }) => {
  return (
    <Styled.Container>
      <Navigation
        links_1={links[0]}
        links_2={links[1]}
        links_3={links[2]}
        links_4={links[3]}
      />
      <Styled.Info>
        <Heading>
          {title[0]}
          <span> {title[1]}</span>
        </Heading>
        <TextComponent sizes={2}>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </TextComponent>
        <Styled.ButtonGroup>
          <Button background>Hire Me</Button>
          <Button>view work</Button>
        </Styled.ButtonGroup>
      </Styled.Info>
    </Styled.Container>
  );
};

Header.propTypes = {
  links: P.array.isRequired,
  title: P.array.isRequired,
};
