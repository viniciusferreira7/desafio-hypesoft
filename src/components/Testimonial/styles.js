import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as Client } from '../Client/styles';

export const Container = styled.div`
${({ theme }) => css`
  margin-top: 22rem;
  padding-top: 5rem;

  @media ${theme.media.lteMedium}{
    margin-top: 3rem;
    padding-top: 0;
  }


> ${Heading}{
    position: relative;
    text-align: center;
    text-transform: capitalize;

    > div {
      width: 8rem;
      height: 0.3rem;
      background-color: #ED1CA6;
      margin-top: 1.6rem;
      position: absolute;
      left:48% ;

      @media ${theme.media.lteMedium}{
        left:38%;
      }
    }
  }
`}
`;

export const ClientContainer = styled.div`
${({ theme }) => css`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  align-items: flex-start;

  @media ${theme.media.lteMedium}{
        flex-direction: column;
      }
`}
`;

export const Group = styled.div`
${({ theme }) => css`
  margin-right: 4.42rem;


  @media ${theme.media.lteMedium}{
    margin: 0 auto;
    margin-bottom: 3rem;
  }

> ${Client}{

}

`}
`;
