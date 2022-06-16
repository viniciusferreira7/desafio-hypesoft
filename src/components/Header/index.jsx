import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Navigation } from '../Navigation';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { Button } from '../Button';
import { Facebook, Github, Instagram, Linkedin } from '@styled-icons/bootstrap';
import { GridDot } from '../GridDot';

export const Header = ({ srcImg, links, title }) => {
  return (
    <Styled.Container>
      <Styled.Background>
        <GridDot />
      </Styled.Background>
      <Styled.Image srcImg={srcImg} />
      <Navigation
        links_1={links[0]}
        links_2={links[1]}
        links_3={links[2]}
        links_4={links[3]}
        links_5={links[4]}
      />
      <Styled.Info>
        <Heading>
          {title[0]}
          <span> {title[1]}</span>
        </Heading>
        <TextComponent sizes={2} lineHeight={3}>
          {`I'm looking for an opportunity to get into the development area,
          despite not having professional experience, I have several projects
          with a repository on GitHub.`}
        </TextComponent>
        <Styled.ButtonGroup>
          <Button background>
            <a
              href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
              target={'_blank'}
              rel="noreferrer"
            >
              Hire Me
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/viniciusferreira7"
              target={'_blank'}
              rel="noreferrer"
            >
              View Work
            </a>
          </Button>
        </Styled.ButtonGroup>
      </Styled.Info>
      <Styled.Follow>
        <TextComponent color="#FFFFF">Follow me on</TextComponent>
        <div>
          <a href="https://github.com/viniciusferreira7">
            <Github aria-label="github icon" />
          </a>
          <a href="https://www.instagram.com/viniciusaf0/">
            <Instagram aria-label="instagram icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006780847667/">
            <Facebook aria-label="facebook icon" />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/">
            <Linkedin aria-label="linkedin icon" />
          </a>
        </div>
      </Styled.Follow>
    </Styled.Container>
  );
};

Header.propTypes = {
  srcImg: P.string.isRequired,
  links: P.array.isRequired,
  title: P.array.isRequired,
};
