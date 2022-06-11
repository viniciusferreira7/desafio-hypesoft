import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Button = ({ children, background = false, sizes = 1.6 }) => {
  return (
    <Styled.Container background={background} sizes={sizes}>
      {children}
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sizes: P.number,
};
