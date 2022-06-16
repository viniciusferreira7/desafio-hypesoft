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
      ${mediaFont(theme)}
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
  ${({ theme, size, bold }) => css`
    color: ${theme.colors.white};
    font-weight:${bold ? 500 : 400};
    ${titleSize[size](theme)};

    > strong{
      color:#ED1CA6;
    }

    > span {
      color: ${theme.colors.secondaryColor};
      position: relative;
      z-index: 2;
    }

    > span::before{
      content: '';
      opacity: 0.2;
      position: absolute;
      z-index: 1;
      top: 80%;
      left: 0;
      width: 90%;
      height: 3rem;
      background: #35016b;
    }
  `}
`;
