import styled, { css } from 'styled-components';

const containerBackgroundActive = (theme) => css`
  background:${theme.colors.white};
  color:${theme.colors.primaryColor};
  `;

export const Container = styled.div`
  ${({ theme }) =>
    css`
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      padding-bottom: 3%;
    `}
`;

export const SectionBackground = styled.section`
${({ theme, background }) => css`
  background-color:${theme.colors.primaryColor};
  color:${theme.colors.white};
  ${background && containerBackgroundActive(theme)}`}
  min-height: 100vh;
  padding: 0 2% 0 2%;
`;
