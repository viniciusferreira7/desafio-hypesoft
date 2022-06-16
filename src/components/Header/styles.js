import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as GridDot } from '../GridDot/styles';

export const Container = styled.header`
${({ theme }) => css`
  min-height: 108rem;
  top: 0;


  @media ${theme.media.lteMedium}{
    min-height: 0;
    padding: 0 2% 5% 2%;
    padding-bottom: 5%;
  }
`}
`;

export const Info = styled.div`
${({ theme }) => css`
  max-width:75.8rem;
  padding-top: 20.8rem;
  position: relative;

  @media ${theme.media.lteMedium}{
    margin-top: 0;
  }

  > ${Heading} {
    max-width: 75.8rem;
    border-radius: 20rem;
    background: ${theme.colors.primaryColor};

    @media ${theme.media.lteMedium}{
      border-radius: 5rem;
      padding: 4%;
    }
  }


  > ${TextComponent}{
    max-width: 48rem;
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
    top: 41.7rem !important;
    right:18%;
    z-index: 3;
  }
`}`;

export const Image = styled.div`
${({ theme, srcImg }) => css`
  background-image:url(${srcImg});
  background-size: 100% 100%;
  max-width: 87.0rem;
  width: 100%;
  height: 92.8rem;
  position: absolute;
  border-radius:7rem ;
  border-top-left-radius: 0;
  border-top-right-radius: 7rem;
  border-bottom-left-radius: 7rem;
  top: 8rem;
  right: 8rem;

  @media ${theme.media.lteMedium}{
    height: 40rem;
    width:90%;
    left: 28%;
    border-radius: 5rem;
    transform: translateX(-25%);
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
      border: 1px solid ${theme.colors.gray_100};
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
