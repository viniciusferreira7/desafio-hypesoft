import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.section`
${({ theme }) => css`
  width: 100%;
  display: flex;
  margin-top: 20rem;
  justify-content: space-around;

  @media ${theme.media.lteMedium}{
    flex-direction: column;
    text-align: center;
    margin-top: 4rem;
  }

  ${Heading}{
    max-width: 31.2rem;
    width: 100%;

    > span{
      color:#bc199c;
      font-weight: 400;
    }
  }
`}
`;

export const ContainerLogo = styled.div`
${({ theme }) => css`
  display: flex;
  max-width: 93.6rem;
  max-height: 12.0rem;
  justify-content: space-around;

  @media ${theme.media.lteMedium}{
    flex-direction: column;
    width: 100%;
    max-height: 96.6rem;
  }
`}
`;
export const Logo = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 120px;
  margin-right: 2.4rem;
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.3), rgba(223, 227, 235, 0.3)), #FFFFFF;
  border-radius: 0.8rem;
  transition: all 500ms ease-in-out;

  @media ${theme.media.lteMedium}{
    margin: 0 auto;
    margin-top: 3rem;
  }

  &:hover{
    border:1rem solid ${theme.colors.white};
  }

  >img{
    width: 11.304rem;
    height: 2.6rem;
  }

  >img:nth-of-type(5){
    width:2.756rem !important;
    height:1.205rem !important;
  }

;

`}
`;
