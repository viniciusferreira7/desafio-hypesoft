import React from 'react';
import { About } from '../About';
import { Stack } from '../Stack';
import dataAbout from '../About/data';
import dataStack from '../Stack/data';
import * as Styled from './styles';

export const Main = () => {
  return (
    <Styled.Container>
      <About {...dataAbout} />
      <Stack title={dataStack.title} />
    </Styled.Container>
  );
};
