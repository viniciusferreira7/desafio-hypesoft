import styled, { css } from 'styled-components';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
  `;

export const Container = styled.nav`
${({ theme, visible }) => css`
    z-index: 5;
    width:100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background: red;
    align-items: center;
    padding:0 0 0 2%;
    border-bottom-color: ${theme.colors.mediumGray};
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 6rem;
    background: ${theme.colors.primaryColor};
    transition: all 300ms ease-in-out;


    @media ${theme.media.lteMedium}{
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      position: fixed;
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

export const ButtonTheme = styled.nav`
${() => css`
    z-index: 5;
    width:3rem;
    height: 3rem;
    transition: all 300ms ease-in-out;
`}
`;

export const Button = styled.button`
${({ theme, visible }) => css`
  z-index:6;
  position: fixed;
  top: 2rem;
  right:5rem;
  width:4rem;
  height:4rem;
  border-radius: 0.8rem;
  background: ${visible ? theme.colors.primaryColor : theme.colors.white};
  color:${visible ? theme.colors.white : theme.colors.primaryColor};
  border:none;
  display:none;
  pointer-events: ${visible ? 'none' : 'all'};

  > svg{
    width:3.5rem;
    height:3.5rem;
  }

  @media ${theme.media.lteMedium}{
    display:flex;
    align-items: center;
    justify-content: center;
  }
`}`;

export const NavLinks = styled.nav`
${({ theme }) => css`
  max-width: 95rem;
  width: 100%;
  display:flex;
  flex-flow:row wrap;
  justify-content: left;
  padding: 2.8rem 0 2.5rem 0;
  background:${theme.colors.secondaryColor} ;
  border-bottom-right-radius: 5rem;

  @media ${theme.media.lteMedium}{
    flex-flow: column wrap;
    align-content: center;
    padding: 0;
    background:none ;
  }

`}`;

export const Links = styled.div`
${({ theme, visible }) => css`
  display: block;
  font-size: ${theme.font.sizes.small};
  text-transform: uppercase;
  padding: 0 4.0rem 2rem 4.0rem;
  color:#FFFF;
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
    background:#FFFF;
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium}{
      display: none;
      background: ${theme.colors.white};
    }
  }

  &:hover::after{
    left:25%;
    width:50%;
  }
  `}
`;
