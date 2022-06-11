import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Button = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>{children}</Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
