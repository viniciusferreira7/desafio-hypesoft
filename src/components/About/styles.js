import styled, { css } from 'styled-components';
import { Container as Button } from '../Button/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
${() => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:'Info' 'Info'
                      'InfoContainer''InfoContainerTwo'
                      'Button' 'Button';

  > ${Button} {
    grid-area: Button;

    > img{
      margin-left: 1.1rem;
    }
  }
`}
`;

export const Info = styled.div`
${() => css`
  max-width: 67.2rem;
  grid-area:Info ;

`}
`;

export const InfoContainer = styled.div`
${() => css`
  max-width: 67.2rem;
  grid-area: InfoContainer;
  display: flex;
  align-items: center;

  > ${TextContainer}{
    max-width: 9.5rem;
    margin-left: 1.6rem;
  }
`}
`;

export const InfoContainerTwo = styled.div`
${() => css`
  max-width: 67.2rem;
  grid-area: InfoContainerTwo;
`}
`;
