import React from 'react';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import data from '../../components/Header/data';
import { Main } from '../../components/Main';

export const Home = () => {
  return (
    <Styled.Container>
      <Styled.SectionBackground>
        <Header {...data} />
        <Main />
      </Styled.SectionBackground>
    </Styled.Container>
  );
};
