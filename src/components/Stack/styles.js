import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
${() => css`

  > ${Heading}{
    position: relative;

    > p {
      width: 8rem;
      height: 0.3rem;
      background-color: #ED1CA6;
      margin-top: 1.6rem;
      position: absolute;
      left:6rem ;
    }
  }
`}
`;
