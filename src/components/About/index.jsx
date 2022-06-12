import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const About = ({ title, text }) => {
  return (
    <Styled.Container>
      <Styled.Info>
        <Heading bold size="big">
          {title}
        </Heading>
        <TextComponent sizes={1.8} lineHeight={1.8}>
          {text}
        </TextComponent>
        <Button background>Say Hi</Button>
      </Styled.Info>
    </Styled.Container>
  );
};

About.propTypes = {
  title: P.string,
  text: P.string,
};
