import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';

export const Card = ({ icon, stack }) => {
  return (
    <Styled.Container>
      {icon}
      <TextComponent color="#242424" sizes={3.2} lineHeight={4}>
        {stack} <p></p>
      </TextComponent>
      <img src="assets/images/GroupBlack.png" alt="Arrow right"></img>
    </Styled.Container>
  );
};

Card.propTypes = {
  icon: P.node.isRequired,
  stack: P.string.isRequired,
};
