import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Navigation } from '../Navigation';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { Button } from '../Button';
import { Github as GitHubIcon } from '@styled-icons/bootstrap/Github';
import { Instagram as InstaIcon } from '@styled-icons/bootstrap/Instagram';
import { Facebook as FaceIcon } from '@styled-icons/bootstrap/Facebook';
import { Linkedin as LinkeIcon } from '@styled-icons/bootstrap/Linkedin';
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
      />
      <Styled.Info>
        <Heading>
          {title[0]}
          <br />
          <span>{title[1]}</span>
        </Heading>
        <TextComponent sizes={2} lineHeight={3}>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </TextComponent>
        <Styled.ButtonGroup>
          <Button background>Hire Me</Button>
          <Button>view work</Button>
        </Styled.ButtonGroup>
      </Styled.Info>
      <Styled.Follow>
        <TextComponent color="#FFFFF">Follow me on</TextComponent>
        <div>
          <a href="https://github.com/viniciusferreira7">
            <GitHubIcon aria-label="github icon" />
          </a>
          <a href="https://www.instagram.com/viniciusaf0/">
            <InstaIcon aria-label="instagram icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006780847667/">
            <FaceIcon aria-label="facebook icon" />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/">
            <LinkeIcon aria-label="linkedin icon" />
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
