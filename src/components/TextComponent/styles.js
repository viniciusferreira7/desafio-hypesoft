import styled, { css } from 'styled-components';

export const Container = styled.p`
${({ theme, sizes, color, lineHeight }) => css`
  font-size: ${sizes}rem;
  color:${color};
  padding:${theme.spacings.large} 0;
  line-height: ${lineHeight}rem;
`}
`;
