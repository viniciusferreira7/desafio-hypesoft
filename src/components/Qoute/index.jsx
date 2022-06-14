import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { theme } from '../../styles/theme';

export const Qoute = ({ comments, rating }) => {
  return (
    <Styled.Container>
      <Styled.Rating>
        <Styled.Info>
          <img src="assets/images/start.png" alt="start" />
          <TextComponent>{rating} Star Rating</TextComponent>
        </Styled.Info>
        <Styled.Qoute>
          <img src="assets/images/qoute.png" alt="qoute 1" />
          <img src="assets/images/qoute.png" alt="qoute" />
        </Styled.Qoute>
      </Styled.Rating>
      <TextComponent
        color={theme.colors.primaryColor}
        sizes={3.2}
        lineHeight={5.12}
      >
        {comments}
      </TextComponent>
    </Styled.Container>
  );
};

Qoute.propTypes = {
  comments: P.string.isRequired,
  rating: P.number.isRequired,
};
