import styled, { css } from 'styled-components';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.4), rgba(223, 227, 235, 0.4)), #FFFFFF;
  border-radius: 6px;
  width: 31.2rem;
  max-height: 35.1rem;
  transition: all 400ms ease-in-out;

  @media ${theme.media.lteMedium}{
    width: 18.5rem;
    padding-bottom: 2%;
    max-height: 40rem;

    > svg {
      width:2.5rem !important;
      height:2.5rem !important;
      margin: 0;
    }

    ${TextContainer}{
      text-align: center;
      font-size: 2rem;
      padding:2.2rem 0 3.2rem 0 !important ;

      > strong {
        margin-top: 1.6rem;
      }
    }

  }

    > svg{
      width:4rem;
      height:4rem;
      margin: 2.2rem 2.2rem 0 2.2rem;
      color: #242424;
    }

    ${TextContainer}{
      padding:2.2rem 0 3.2rem 2.8rem ;
      position: relative;

      > strong {
        width: 6.4rem;
        height: 0.3rem;
        background-color: #ED1CA6;
        margin-top: 1.6rem;
        margin-bottom: 2.8rem;
        position: absolute;
        bottom: -1.3rem;
        left:6rem ;
      }
    }

    > img{
      margin: 2.8rem 0 3.6rem 3.5rem;
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
    }

;
`}
`;
