import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';

export const Heading = ({ children, light = false }) => {
  return <Styled.Title light={light}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: false,
};
