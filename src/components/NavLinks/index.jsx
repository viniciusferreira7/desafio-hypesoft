import P from 'prop-types';
import React from 'react';

import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ link = [] }) => {
  return (
    <Styled.Container>
      {link.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  link: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ).isRequired,
};
