import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
${({ theme }) => css`
  width: 100%;
  padding-top: 18rem;

  @media ${theme.media.lteMedium}{
    padding-top:5.5rem ;
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

export const Info = styled.div`
${({ theme }) => css`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding-top: 5.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media ${theme.media.lteMedium}{
    grid-template-columns: 1fr;
    height: auto;
    padding: 5.2rem 2% 2% 0;
  }
`}
`;
