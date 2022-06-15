import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { theme } from '../../styles/theme';

export const Footer = () => {
  return (
    <Styled.Container>
      <img src="assets/images/logo/hypesoft-logo.png" alt="hypesoft logo" />
      <TextComponent lineHeight={0} sizes={1.4} color={theme.colors.gray_500}>
        Made with <span>♥</span> by John and <strong>Hypesoft</strong>
      </TextComponent>
    </Styled.Container>
  );
};
