import styled, { css } from 'styled-components';

export const Container = styled.p`
${({ theme, sizes, color }) => css`
  font-size: ${sizes}rem;
  color:${color};
  padding:${theme.spacings.large}
`}
`;
