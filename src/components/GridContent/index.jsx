import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading upperCase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{html}</TextComponent>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
