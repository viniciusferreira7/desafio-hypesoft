import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const Work = ({ title }) => {
  return (
    <Styled.Container>
      <Heading size="large">
        {title} <div></div>
      </Heading>
    </Styled.Container>
  );
};

Work.propTypes = {
  title: P.string.isRequired,
};
