import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export const Heading = ({
  children,
  as = 'h1',
  size = 'huge',
  bold = false,
  color = theme.colors.white,
}) => {
  return (
    <Styled.Title as={as} size={size} bold={bold} color={color}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'large', 'big', 'huge']),
  bold: P.bool,
  color: P.string,
};
