import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import data from './data';
import { PostCard } from '../PostCard';

export const Work = ({ title }) => {
  return (
    <Styled.Container id="Works">
      <Heading size="large">
        {title} <div></div>
      </Heading>
      <Styled.Info>
        {data.postCards.map((postCards) => (
          <PostCard
            key={postCards.subTitle}
            srcImg={postCards.srcImg}
            subTitle={postCards.subTitle}
            link={postCards.link}
          />
        ))}
      </Styled.Info>
    </Styled.Container>
  );
};

Work.propTypes = {
  title: P.string.isRequired,
};
