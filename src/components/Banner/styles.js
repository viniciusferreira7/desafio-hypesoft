import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as Button } from '../Button/styles';
import { Container as GridDot } from '../GridDot/styles';

export const Container = styled.div`
${({ theme }) => css`
  width: 100%;
  max-height:31.2rem;
  overflow: hidden;
  padding: 6.4rem 2%;
  position: relative;

  @media ${theme.media.ltMedium}{
      max-height:90rem;
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
      margin-top: 3.2rem;

      > img{
        width: ;
        margin-left: 0.9rem;
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

    @media ${theme.media.ltMedium}{
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

    @media ${theme.media.ltMedium}{
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
