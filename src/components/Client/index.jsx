import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { theme } from '../../styles/theme';

export const Client = ({ srcImg, name, profession, company }) => {
  return (
    <Styled.Container>
      <Styled.Photo srcImg={srcImg} />
      <Styled.Info>
        <TextComponent
          color={theme.colors.primaryColor}
          sizes={1.8}
          lineHeight={2.8}
        >
          {name}
        </TextComponent>
        <TextComponent color="#A5A5A5" sizes={1.4} lineHeight={2}>
          {profession} of <span>{company}</span>
        </TextComponent>
      </Styled.Info>
    </Styled.Container>
  );
};

Client.propTypes = {
  srcImg: P.string.isRequired,
  name: P.string.isRequired,
  profession: P.string.isRequired,
  company: P.string.isRequired,
};
