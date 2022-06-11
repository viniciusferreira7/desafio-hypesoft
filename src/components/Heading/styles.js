import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) =>
    css`
      font-size: ${theme.font.sizes.large};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.font.sizes.xlarge};
    `,
  big: (theme) =>
    css`
      font-size: ${theme.font.sizes.xxlarge};
    `,
  huge: (theme) =>
    css`
      font-size: ${theme.font.sizes.xhuge};
      ${mediaFont(theme)}
    `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    ${titleSize[size](theme)};
  `}
`;
