import P from 'prop-types';
import React from 'react';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const TextComponent = ({
  children,
  sizes = 1.8,
  color = theme.colors.gray_500,
}) => {
  return (
    <Styled.Container sizes={sizes} color={color}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  sizes: P.number,
  color: P.string,
};
