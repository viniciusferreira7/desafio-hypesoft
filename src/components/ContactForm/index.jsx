import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { theme } from '../../styles/theme';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const ContactForm = () => {
  const [status, setStatus] = useState({
    message: '',
    send: null,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmailMessaage52',
        'template_4ok6tzu',
        form.current,
        'o0ssgS75lRfshhxGO',
      )
      .then(
        (result) => {
          setStatus({ message: result, send: true });
        },
        (error) => {
          setStatus({ message: error, send: true });
        },
      );
    e.target.reset();
  };

  return (
    <Styled.Container ref={form} onSubmit={sendEmail}>
      {status.send && (
        <TextComponent lineHeight={0} color="#018f1e">
          The email has been sent
        </TextComponent>
      )}
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
          type="subject"
          name="subject"
          id="subject"
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
