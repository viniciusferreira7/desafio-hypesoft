import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as GridDot } from '../GridDot/styles';

export const Container = styled.header`
${({ theme }) => css`
  min-height: 108rem;


  @media ${theme.media.lteMedium}{
    min-height: 0;
    padding-bottom: 5%;
  }
`}
`;

export const Info = styled.div`
${({ theme }) => css`
  max-width:75.8rem;
  margin-top: 23.8rem;
  position: relative;

  @media ${theme.media.lteMedium}{
    margin-top: 0;
  }

  > ${Heading} {
    max-width: 75.8rem;
  }


  > ${TextComponent}{
    max-width: 67rem;
  }
  `}
`;

export const Background = styled.div`
${({ theme }) => css`
  background: ${theme.colors.secondaryColor};
  height: 100.8rem;
  width: 100rem;
  max-width: 78.4rem;
  position: absolute;
  top: 0;
  right: 0;

  @media ${theme.media.lteMedium}{
    width: 100%;
    height: 5.5rem;
  }

  > ${GridDot}{
    position: absolute;
    top: 41.7rem;
    right:18%;
    z-index: 3;
  }
`}`;

export const Image = styled.div`
${({ theme, srcImg }) => css`
  background-image:url(${srcImg});
  background-size: 100% 100%;
  width: 87.0rem;
  height: 92.8rem;
  position: absolute;
  top: 8rem;
  right: 8rem;

  @media ${theme.media.lteMedium}{
    display: none;
  }
`}`;

export const ButtonGroup = styled.div`
${() => css`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`}`;

export const Follow = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 20.2rem;

  @media ${theme.media.lteMedium}{
    margin-top: 10rem;
  }

  > ${TextComponent}{
    padding: 0;
  }

  > div {
    display: flex;
    gap: 1.2rem;

      > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.8rem;
      height: 4.8rem;
      background: ${theme.colors.white};
      color: ${theme.colors.primaryColor};
      border: 1px solid #DFE3EB;
      border-radius: 3px;
      transition: all 600ms ease-in-out;

      > svg {
        width: 2rem;
        height: 2rem;
      }
    }

    > a:hover{
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    border:none;


    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  }
`}`;
