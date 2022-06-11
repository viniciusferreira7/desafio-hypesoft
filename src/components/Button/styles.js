import styled, { css } from 'styled-components';

export const Container = styled.button`
${({ theme, background, sizes }) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.2rem ${theme.spacings.large};
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  background:${background ? theme.colors.secondaryColor : theme.colors.white};
  color:${background ? theme.colors.white : theme.colors.primaryColor};
  font-size: ${sizes}rem;
  border-radius: 5px;
  border: none;
  transition: all 500ms ease-in-out;
  cursor: pointer;

&:hover {
  background:${!background ? theme.colors.secondaryColor : theme.colors.white};
  color:${!background ? theme.colors.white : theme.colors.primaryColor};
}
`}
`;
