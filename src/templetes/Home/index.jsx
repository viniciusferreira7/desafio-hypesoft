import React from 'react';
import { Header } from '../../components/Header';
import * as Styled from './styles';
import data from '../../components/Header/data';

export const Home = () => {
  return (
    <Styled.Container>
      <Header {...data} />
    </Styled.Container>
  );
};
