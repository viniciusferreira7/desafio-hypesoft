import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) =>
    css`
      font-size: ${theme.font.sizes.medium};
    `,
  medium: (theme) =>
    css`
      font-size: ${theme.font.sizes.large};
    `,
  large: (theme) =>
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
  ${({ theme, size, bold, color }) => css`
    color: ${color};
    font-weight:${bold ? 500 : 400};
    ${titleSize[size](theme)};

    > span {
      color: ${theme.colors.secondaryColor};
    }
  `}
`;
