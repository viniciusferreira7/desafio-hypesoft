import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const ContactForm = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

ContactForm.propTypes = {
  children: P.node.isRequired,
};
