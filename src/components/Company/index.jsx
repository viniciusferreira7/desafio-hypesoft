import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import data from './data';

export const Company = () => {
  return (
    <Styled.Container>
      <Heading size="medium">
        I have over <strong>600 commits on GitHub</strong>, using multiple
        technologies where these companies also use.
      </Heading>
      <Styled.ContainerLogo>
        {data.srcLogo.map((srcLogo) => (
          <Styled.Logo key={srcLogo.logo}>
            <img src={srcLogo.logo} alt={`logo ${srcLogo.logo}`} />
          </Styled.Logo>
        ))}
      </Styled.ContainerLogo>
    </Styled.Container>
  );
};
