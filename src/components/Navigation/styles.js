import styled, { css } from 'styled-components';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
  `;

export const Container = styled.div`
${({ theme, visible }) => css`
    z-index: 5;
    width:100%;
    padding:2.8rem 0 3.8rem;
    border-bottom-color: ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium}{
      position: absolute;
      top: 0;
      left: 0;
      height:100vh;
      visibility:hidden;
      opacity: 0;
      background-color:${theme.colors.primaryColor};
      ${visible && menuVisible(theme)}
    }
`}
`;

export const Button = styled.button`
${({ theme, visible }) => css`
  z-index:6;
  position: fixed;
  top: 2rem;
  right:2rem;
  width:4rem;
  height:4rem;
  background: ${
    visible ? theme.colors.secondaryColor : theme.colors.primaryColor
  };
  color:${theme.colors.white};
  border:none;
  display:none;
  pointer-events: ${visible ? 'none' : 'all'};

  > svg{
    width:2.5rem;
    height:2.5rem;
  }

  @media ${theme.media.lteMedium}{
    display:flex;
    align-items: center;
    justify-content: center;
  }
`}`;

export const NavLinks = styled.nav`
${({ theme }) => css`
display:flex;
flex-flow:row wrap;
justify-content: right;

@media ${theme.media.lteMedium}{
  flex-flow: column wrap;
  align-content: center;
}

`}`;

export const Links = styled.a`
${({ theme, visible }) => css`
  display: block;
  font-size: ${theme.font.sizes.small};
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 4.0rem 2rem 4.0rem;
  color:${theme.colors.white};
  position:relative;
  cursor: pointer;

  @media ${theme.media.lteMedium}{
    padding: ${theme.spacings.xlarge} 0;
    font-size: ${theme.font.sizes.medium};
    color:${visible ? theme.colors.primaryColor : theme.colors.white}
  }

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
