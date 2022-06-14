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
        Got a project in mind? Let`s make something awesome
        <span> together</span>.
      </Heading>
      <Button background>
        Hire me <img src="assets/images/Group.png" alt="Arrow right"></img>
      </Button>
    </Styled.Container>
  );
};
