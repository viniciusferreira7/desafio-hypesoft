import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { theme } from '../../styles/theme';

export const PostCard = ({ srcImg, subTitle, link }) => {
  return (
    <Styled.Container>
      <Styled.SrcImg srcImg={srcImg}></Styled.SrcImg>
      <Styled.Info>
        <TextComponent
          color={theme.colors.primaryColor}
          sizes={2.4}
          lineHeight={4}
        >
          {subTitle}
        </TextComponent>
        <a href={link}>
          <img src="assets/images/GroupPink.png" alt="Arrow right"></img>
        </a>
      </Styled.Info>
    </Styled.Container>
  );
};

PostCard.propTypes = {
  srcImg: P.string.isRequired,
  subTitle: P.string.isRequired,
  link: P.string,
};
