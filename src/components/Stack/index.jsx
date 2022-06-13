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
        {data.stack.map((data) => (
          <Card key={data.text} stack={data.text} icon={data.icon} />
        ))}
      </Styled.StackGroup>
    </Styled.Container>
  );
};

Stack.propTypes = {
  title: P.string.isRequired,
};
