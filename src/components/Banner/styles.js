import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as Button } from '../Button/styles';
import { Container as GridDot } from '../GridDot/styles';

export const Container = styled.section`
${({ theme }) => css`
  width: 100%;
  max-height:31.2rem;
  overflow: hidden;
  padding: 6.4rem 2%;
  position: relative;
  margin-top: 16.4rem;

  @media ${theme.media.lteMedium}{
      max-height:auto;
      padding-top: 3rem
    }

 >  ${GridDot}{
    opacity: 0.15;
    position: absolute;
    top: 6.4rem;
    left: 12.2rem;
  }


  ${Heading}{
      width:50rem;
      height: 9.6rem;
      margin: 0 auto;


      @media ${theme.media.lteMedium}{
        width: 100%;
        text-align: center;
        height: 15rem;
        margin-bottom: 7rem;
      }

      > span{
        color:#bc199c;
      }

      > span::before{
        display: none;
      }
    }

  > ${Button} {
      width: 17.7rem;
      height: 5.6rem;
      margin: 0 auto;
      margin-top: 7.2rem;

      > a{
        margin-right: 0.9rem;
      }
  }
`}
`;

export const SmallEllipse = styled.div`
  ${({ theme }) => css`
    width:7.6rem;
    height:7.6rem;
    border-radius: calc(7.6rem / 2);
    background: ${theme.colors.white};
    opacity: 0.03;
    position: absolute;
    top: 2.6rem;
    right: 11.6rem;

    @media ${theme.media.lteMedium}{
      top: 8rem;
      right: 0;
    }
  `}
`;

export const HugeEllipse = styled.div`
  ${({ theme }) => css`
    width:52.9rem;
    height:52.9rem;
    border-radius: calc(52.9rem / 2);
    background: ${theme.colors.white};
    opacity: 0.03;
    position: absolute;
    top: 13.9rem;
    right: 90.7rem;

    @media ${theme.media.lteMedium}{
      width:30rem;
      height:30rem;
      top: 0;
      right: 4rem;
    }
  `}
`;

export const ContainerGridDot = styled.div`
  ${() => css`
    position: absolute;
    top:15rem;
    right: 21rem;
    transform: rotate(-90deg);

    ${GridDot}{
      opacity: 0.3;

    }
  `}
`;
