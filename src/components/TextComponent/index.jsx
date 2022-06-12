import P from 'prop-types';
import React from 'react';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const TextComponent = ({
  children,
  sizes = 1.4,
  color = theme.colors.gray_500,
  lineHeight = 2.0,
}) => {
  return (
    <Styled.Container sizes={sizes} color={color} lineHeight={lineHeight}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  sizes: P.number,
  color: P.string,
  lineHeight: P.number,
};
