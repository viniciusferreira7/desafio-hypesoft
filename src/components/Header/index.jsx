import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Navigation } from '../Navigation';
import { Heading } from '../Heading';

export const Header = ({ links = [], title = [] }) => {
  return (
    <Styled.Container>
      <Navigation
        links_1={links[0]}
        links_2={links[1]}
        links_3={links[2]}
        links_4={links[3]}
      />
      <Styled.Info>
        <Heading>
          {title[0]}
          <span> {title[1]}</span>
        </Heading>
      </Styled.Info>
    </Styled.Container>
  );
};

Header.propTypes = {
  links: P.array.isRequired,
  title: P.array.isRequired,
};
