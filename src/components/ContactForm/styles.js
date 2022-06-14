import styled, { css } from 'styled-components';
import { Container as Button } from '../Button/styles';

export const Container = styled.form`
${({ theme }) => css`
  width: 100%;
  max-width: 76rem;
  padding: 4.8rem;
  background: ${theme.colors.white};
  box-shadow: 0rem 1.2rem 2.4rem rgba(10, 25, 49, 0.02);
  border-radius: 0.8rem;

  @media ${theme.media.lteMedium}{
    padding: 2rem;
  }
  `}
`;
export const GroupInput = styled.form`
${({ theme }) => css`
  width: 100%;
  max-width: 66.4rem;
  min-height: 28.8rem;
  margin: 2.4rem 0 3.2rem 0;

  input{
    width: 100%;
    padding: 1.4rem 2rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray_100};
    color:${theme.colors.gray_500};
    border-radius: 0.4rem;
    outline: none;
    margin-bottom: 1.6rem;
    transition: all 300ms ease-in-out;

    &:focus{
      border: 0.2rem solid ${theme.colors.secondaryColor};
    }

    &:first-of-type{
      margin-right: 1.6rem;

      @media ${theme.media.lteMedium}{
        margin-right: 0;
      }
    }
  }

  textarea{
    padding: 1.4rem 2.4rem;
    max-width: 66.4rem;
    width: 100%;
    height: 15.2rem;
    resize: none;
    outline: none;
    border: 0.1rem solid ${theme.colors.gray_100};
    transition: all 300ms ease-in-out;

    &:focus{
      border: 0.2rem solid ${theme.colors.secondaryColor};
    }
  }

  ${Button}{
    margin-top: 3.2rem;
    max-width: 24rem;
    width: 100%;

    &:hover{
      border: 0.2rem solid ${theme.colors.secondaryColor};
    }

    &:active{
      background:${theme.colors.primaryColor};
      color:${theme.colors.white};
      border-color:${theme.colors.white};
    }

    >img{
      margin-left: 1.4rem;
    }
  }

  @media ${theme.media.lteMedium}{
  }
  `}
`;
export const TwoInputs = styled.form`
${({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between !important;

  @media ${theme.media.lteMedium}{
    flex-direction: column;
  }
  `}
`;
