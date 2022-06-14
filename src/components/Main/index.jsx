import React from 'react';
import { About } from '../About';
import { Stack } from '../Stack';
import dataAbout from '../About/data';
import dataStack from '../Stack/data';
import * as Styled from './styles';
import { Work } from '../Work';
import { Company } from '../Company';
import { Banner } from '../Banner';

export const Main = () => {
  return (
    <Styled.Container>
      <About {...dataAbout} />
      <Stack title={dataStack.title} />
      <Work title="My Selected Work" />
      <Company />
      <Banner />
    </Styled.Container>
  );
};
