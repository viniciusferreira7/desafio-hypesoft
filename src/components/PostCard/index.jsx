import P from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { ThemeContext } from '../../ToggleThemeContext/index.';

export const PostCard = ({ srcImg, subTitle, link }) => {
  const [state] = useContext(ThemeContext);

  return (
    <Styled.Container>
      <Styled.SrcImg srcImg={srcImg}></Styled.SrcImg>
      <Styled.Info>
        <TextComponent
          color={state.colors.primaryColor}
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
