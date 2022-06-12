import styled, { css } from 'styled-components';
import { Container as Button } from '../Button/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
${() => css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.8rem;
  grid-template-areas:'SrcImg' 'Description';
  padding-top: 10rem;
`}
`;

export const SrcImg = styled.div`
${({ theme, srcImg }) => css`
  grid-area: 'SrcImg';
  max-width: 56rem;
  width: 100%;
  height: 54.2rem;
  background-image: url(${srcImg});
  background-size: cover;
  border-radius: 1rem;
  box-shadow: 3.2rem 3.2rem   ${theme.colors.white};

  @media ${theme.media.lteMedium}{
    display: none;
  }
`}
`;

export const Description = styled.div`
${() => css`
  grid-area: 'Description';
  max-width: 67.2rem;

  > ${Button} {
    width: 16.2rem;
    height: 5.6rem;

    > img{
      margin-left: 1.1rem;
    }
  }
`}
`;

export const InfoHeading = styled.div`
${() => css`
`}
`;

export const InfoContainer = styled.div`
${({ theme }) => css`
  max-width: 67.2rem;
  display: flex;

  @media ${theme.media.lteMedium}{
    flex-direction: column;
    padding-bottom: 3.2rem;
  }
`}
`;

export const Group = styled.div`
${() => css`
  max-width: 20.6rem;
  display: flex;
  align-items: center;
  margin-right: 5rem;

  > ${TextContainer}:nth-child(2){
    max-width: 9.5rem;
    margin-left: 1.6rem;
    padding: 0;
  }
`}
`;

`}`;

export const GroupTwo = styled.div`
${() => css`
  width: 25.1rem;
  display: flex;
  align-items: center;

  > ${TextContainer}:nth-child(2){
    max-width: 9.5rem;
    margin-left: 1.6rem;
    padding: 0;
  }
`}
`;

`}`;
