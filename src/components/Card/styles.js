import styled, { css } from 'styled-components';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
${() => css`
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.4), rgba(223, 227, 235, 0.4)), #FFFFFF;
  border-radius: 6px;
  width: 31.2rem;
  height: 35.1rem;
  transition: all 400ms ease-in-out;

    > svg{
      width:4rem;
      height:4rem;
      margin: 2.2rem;
    }

    ${TextContainer}{
      padding: 0 0 5.5rem 3.2rem;
      position: relative;

      > p {
        width: 6.4rem;
        height: 0.3rem;
        background-color: #ED1CA6;
        margin-top: 1.6rem;
        position: absolute;
        left:6rem ;
      }
    }

    > img{
      margin-left: 3.5rem;
    }


    &:hover{
      background: #FFFFFF;
      box-shadow: 0px 20px 48px rgba(10, 25, 49, 0.09);
      border-radius: 6px;
      border: 0.3rem solid #ED1CA6;

      ${TextContainer}{
        color:#ED1CA6 ;
      }

      > svg {
        color: #ED1CA6;
      }

      >img {
        margin-left: 20rem;
      }
    }

;
`}
`;
