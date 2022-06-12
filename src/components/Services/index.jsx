import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const Services = ({ title }) => {
  return (
    <Styled.Container>
      <Heading size="large">
        {title} <p></p>
      </Heading>
    </Styled.Container>
  );
};

Services.propTypes = {
  title: P.string.isRequired,
};
