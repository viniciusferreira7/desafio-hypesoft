import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
${({ theme }) => css`
  padding-top: 18.8rem;

  @media ${theme.media.lteMedium}{
    padding-top: 5rem;
  }

  > ${Heading}{
    position: relative;
    text-align: center;
    text-transform:capitalize ;

    > div {
      width: 8rem;
      height: 0.3rem;
      background-color: #ED1CA6;
      margin-top: 1.6rem;
      position: absolute;
      left:48% ;
    }
  }
`}
`;

export const StackGroup = styled.div`
${() => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-row-gap: 3rem;
  justify-items: center;
  align-content: center;
  align-items: center;
  padding-top: 5rem;
`}
`;
