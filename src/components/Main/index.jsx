import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Main = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Main.propTypes = {
  children: P.node.isRequired,
};
