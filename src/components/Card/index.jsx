import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';

export const Card = ({ icon, stack }) => {
  return (
    <Styled.Container>
      <Styled.ContainerIcon>{icon}</Styled.ContainerIcon>
      <TextComponent color="#242424" sizes={3.2} lineHeight={4}>
        {stack} <strong></strong>
      </TextComponent>
      <img src="assets/images/GroupBlack.png" alt="Arrow right"></img>
    </Styled.Container>
  );
};

Card.propTypes = {
  icon: P.node,
  stack: P.string.isRequired,
};
