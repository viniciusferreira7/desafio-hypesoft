import React from 'react';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import data from '../../components/Header/data';

export const Home = () => {
  return (
    <Styled.Container>
      <Styled.SectionBackground>
        <Header {...data} />
      </Styled.SectionBackground>
    </Styled.Container>
  );
};
