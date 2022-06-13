import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import data from './data';

export const Company = () => {
  return (
    <Styled.Container>
      <Heading size="medium">
        I worked with <strong>289+</strong> Companies all over the World
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
