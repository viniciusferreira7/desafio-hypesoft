import React from 'react';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { SectionBackground } from '../../components/SectionBackgroundu';
import data from '../../components/Header/data';

export const Home = () => {
  return (
    <Styled.Container>
      <SectionBackground>
        <Header {...data} />
      </SectionBackground>
    </Styled.Container>
  );
};
