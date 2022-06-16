import React, { useContext } from 'react';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import data from '../../components/Header/data';
import { GlobalStyles } from '../../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../ToggleThemeContext/index.';
import { Main } from '../../components/Main';

export const Home = () => {
  const [state] = useContext(ThemeContext);

  return (
    <ThemeProvider theme={state}>
      <Styled.Container>
        <Styled.SectionBackground>
          <Header {...data} />
          <Main />
        </Styled.SectionBackground>
      </Styled.Container>
      <GlobalStyles />
    </ThemeProvider>
  );
};
