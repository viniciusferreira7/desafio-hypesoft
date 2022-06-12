import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const Stack = ({ title }) => {
  return (
    <Styled.Container>
      <Heading size="large">
        {title} <p></p>
      </Heading>
    </Styled.Container>
  );
};

Stack.propTypes = {
  title: P.string.isRequired,
};
