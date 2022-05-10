import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Heading = ({ children, colorDark = false, as = 'h1', size = 'big', upperCase = false }) => {
  return (
    <Styled.Title colorDark={colorDark} as={as} size={size} upperCase={upperCase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  upperCase: P.bool,
};
