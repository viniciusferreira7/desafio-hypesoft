import styled, { css } from 'styled-components';

export const Container = styled.p`
${({ theme }) => css`
  font-size: ${theme.font.sizes.medium};
  color:${theme.colors.gray_500};
  padding:${theme.spacings.large}
`}
`;
