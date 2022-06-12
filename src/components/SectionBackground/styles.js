import styled, { css } from 'styled-components';

const containerBackgroundActive = (theme) => css`
  background:${theme.colors.white};
  color:${theme.colors.primaryColor};
  `;

export const Container = styled.section`
${({ theme, background }) => css`
  background-color:${theme.colors.primaryColor};
  color:${theme.colors.white};
  ${background && containerBackgroundActive(theme)}`}
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
