import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
display: block;
font-size: ${theme.font.sizes.small};
text-decoration: none;
padding:${theme.spacings.medium};
color:${theme.colors.primaryColor};
position:relative;

&::after{
  content: '';
  position: absolute;
  bottom: 1.3rem;
  left:50%;
  width:0;
  height:0.2rem;
  background:${theme.colors.secondaryColor};
  transition: all 300ms ease-in-out;
}

&:hover::after{
  left:25%;
  width:50%;
}
`}
`;
