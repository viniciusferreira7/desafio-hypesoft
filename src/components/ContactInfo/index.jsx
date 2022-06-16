import P from 'prop-types';
import React, { useContext } from 'react';
import { Email } from '@styled-icons/material-outlined/Email';
import {
  Telephone,
  Github,
  Facebook,
  Linkedin,
  Instagram,
} from '@styled-icons/bootstrap';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import data from './data';
import { ThemeContext } from '../../ToggleThemeContext/index.';

export const ContactInfo = ({ email, phone }) => {
  const [state] = useContext(ThemeContext);

  return (
    <Styled.Container>
      <Heading bold size="medium">
        Get In Touch
      </Heading>
      <Styled.Group>
        <Styled.Info>
          <Styled.Icon>
            <Email aria-label="email icon" />
          </Styled.Icon>
          <TextComponent
            colors={state.colors.primaryColor}
            sizes={1.8}
            lineHeight={2.8}
          >
            {email}
          </TextComponent>
        </Styled.Info>
        <Styled.Info>
          <Styled.Icon>
            <Telephone aria-label="telephone icon" />
          </Styled.Icon>
          <TextComponent
            colors={state.colors.primaryColor}
            sizes={1.8}
            lineHeight={2.8}
          >
            {phone}
          </TextComponent>
        </Styled.Info>
      </Styled.Group>
      <Styled.GroupIcon>
        <a href={data.github}>
          <Github aria-label="github icon" />
        </a>
        <a href={data.instagram}>
          <Instagram aria-label="instagram icon" />
        </a>
        <a href={data.linkedin}>
          <Linkedin aria-label="linkedin icon" />
        </a>
        <a href={data.facebook}>
          <Facebook aria-label="facebook icon" />
        </a>
      </Styled.GroupIcon>
    </Styled.Container>
  );
};

ContactInfo.propTypes = {
  email: P.string.isRequired,
  phone: P.string.isRequired,
};
