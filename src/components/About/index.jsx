import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const About = ({ title, text, years, projects }) => {
  return (
    <Styled.Container>
      <Styled.Info>
        <Heading bold size="big">
          {title}
        </Heading>
        <TextComponent sizes={1.8} lineHeight={2.8}>
          {text}
        </TextComponent>
      </Styled.Info>
      <Styled.InfoContainer>
        <TextComponent color="#ED1CA6" sizes={5.6} lineHeight={6.4}>
          {years}
        </TextComponent>
        <TextComponent color="#FFFF" sizes={1.8} lineHeight={2.8}>
          Years of Experience
        </TextComponent>
      </Styled.InfoContainer>
      <Styled.InfoContainerTwo>
        <TextComponent color="#ED1CA6" sizes={5.6} lineHeight={6.4}>
          {projects}
        </TextComponent>
        <TextComponent color="#FFFF" sizes={1.8} lineHeight={2.8}>
          Completed Projects
        </TextComponent>
      </Styled.InfoContainerTwo>
      <Button background>
        Say Hi <img src="assets/images/Group.png" alt="Arrow right"></img>
      </Button>
    </Styled.Container>
  );
};

About.propTypes = {
  title: P.string,
  text: P.string,
  years: P.string,
  projects: P.string,
};
