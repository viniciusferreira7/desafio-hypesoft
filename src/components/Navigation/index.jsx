import P from 'prop-types';
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';

export const Navigation = ({ links_1, links_2, links_3, links_4 }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <Styled.NavLinks>
          <Styled.Links>{links_1}</Styled.Links>
          <Styled.Links>{links_2}</Styled.Links>
          <Styled.Links>{links_3}</Styled.Links>
          <Styled.Links>{links_4}</Styled.Links>
        </Styled.NavLinks>
      </Styled.Container>
    </>
  );
};

Navigation.propTypes = {
  links_1: P.string.isRequired,
  links_2: P.string.isRequired,
  links_3: P.string.isRequired,
  links_4: P.string.isRequired,
};
