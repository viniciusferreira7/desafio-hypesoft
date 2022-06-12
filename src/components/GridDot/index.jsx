import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const GridDot = ({ color = '#242424' }) => {
  return (
    <Styled.Container>
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
      <Styled.Dot color={color} />
    </Styled.Container>
  );
};

GridDot.propTypes = {
  color: P.string,
};
