import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Card } from '../Card';
import data from './data';

export const Stack = ({ title }) => {
  return (
    <Styled.Container>
      <Heading size="large">
        {title} <div></div>
      </Heading>
      <Styled.StackGroup>
        <Card stack={data.front.text} icon={data.front.icon} />
        <Card stack={data.back.text} icon={data.back.icon} />
        <Card stack={data.soft.text} icon={data.soft.icon} />
      </Styled.StackGroup>
    </Styled.Container>
  );
};

Stack.propTypes = {
  title: P.string.isRequired,
};
