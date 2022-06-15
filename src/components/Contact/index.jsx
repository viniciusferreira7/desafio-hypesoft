import React from 'react';
import * as Styled from './styles';
import { ContactForm } from '../ContactForm';
import { ContactInfo } from '../ContactInfo';
import { GridDot } from '../GridDot';

import data from '../ContactInfo/data';

export const Contact = () => {
  return (
    <Styled.Container id="Contact">
      <GridDot color="#ED1CA6" />
      <ContactForm />
      <ContactInfo email={data.email} phone={data.phone} />
    </Styled.Container>
  );
};
