import React from 'react';
import { About } from '../About';
import data from '../About/data';
import * as Styled from './styles';

export const Main = () => {
  return (
    <Styled.Container>
      <About {...data} />
    </Styled.Container>
  );
};
