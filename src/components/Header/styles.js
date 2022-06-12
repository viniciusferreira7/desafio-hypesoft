import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${() => css`

`}
`;

export const Info = styled.div`
${() => css`
  max-width:75.8rem;

  > ${Heading} {
    max-width: 75.8rem;
  }
  `}
`;

export const ButtonGroup = styled.div`
${() => css`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`}`;

export const Follow = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 20.2rem;

  > ${TextComponent}{
    padding: 0;
  }

  > div {
    display: flex;
    gap: 1.2rem;

    > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    border: 1px solid #DFE3EB;
    border-radius: 3px;
    transition: all 400ms ease-in-out;

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }

  }
  > a:hover{
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    border:none;


    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

  }
`}`;
