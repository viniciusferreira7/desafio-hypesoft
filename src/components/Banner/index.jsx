import React from 'react';
import { theme } from '../../styles/theme';
import { Button } from '../Button';
import { GridDot } from '../GridDot';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const Banner = () => {
  return (
    <Styled.Container>
      <Styled.SmallEllipse />
      <Styled.HugeEllipse />
      <GridDot color={theme.colors.white} />
      <Styled.ContainerGridDot>
        <GridDot color="#bc199c" />
      </Styled.ContainerGridDot>
      <Heading size="medium">
        Are you looking for a Junior Developer, committed, easy to learn and
        like to work in a team? So you can count
        <span> on me</span>.
      </Heading>
      <Button background>
        <a
          href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
          target={'_blank'}
          rel="noreferrer"
        >
          Hire Me
        </a>
        <img src="assets/images/Group.png" alt="Arrow right" />
      </Button>
    </Styled.Container>
  );
};
