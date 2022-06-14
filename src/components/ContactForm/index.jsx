import P from 'prop-types';
import React from 'react';
import { theme } from '../../styles/theme';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const ContactForm = () => {
  return (
    <Styled.Container>
      <Heading bold color={theme.colors.primaryColor} size="medium">
        Let me know here.
      </Heading>
      <Styled.GroupInput>
        <Styled.TwoInputs>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email address"
          />
        </Styled.TwoInputs>
        <input
          type="subjects"
          name="subjects"
          id="subjects"
          required
          placeholder="Subjects"
        />
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="33"
          required
          placeholder="Message"
        />
        <Button background>
          Send message <img src="assets/images/GroupPaper.png" alt="send"></img>
        </Button>
      </Styled.GroupInput>
    </Styled.Container>
  );
};

ContactForm.propTypes = {
  children: P.node.isRequired,
};
