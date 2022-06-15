import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
  max-width:53.6rem;
  padding: 4.8rem;
  background: ${theme.colors.white};
  box-shadow: 0rem 1.2rem 2.4rem rgba(10, 25, 49, 0.02);
  border-radius: 0.8rem;
  margin-left: 2.4rem;

  @media ${theme.media.lteMedium}{
    margin-top: 3rem;
    margin-left: 0;
  }
  `}
`;

export const Group = styled.div`
${() => css`

  `}
`;

export const Info = styled.div`
${({ theme }) => css`
  max-width:44rem;
  max-height: 8rem;
  display: flex;
  align-items: center;
  margin: 2.533rem 0;
  transition: all 300ms ease-in-out;

  @media ${theme.media.lteMedium}{
    flex-direction: column;
    max-height: 13rem;
    margin-bottom: 1rem;

  }


  &:hover {
    ${TextComponent}{
      text-decoration: underline;
      text-decoration-color: #ED1CA6;
    }

    ${Icon}{
      border: 0.2rem solid #ED1CA6;
    }
  }

  @media ${theme.media.lteMedium}{

  }
  `}
`;

export const Icon = styled.div`
${({ theme }) => css`
  display: flex;
  min-width:8rem;
  min-height: 8rem;
  margin-right: 2rem;
  align-items: center;
  justify-content: center;
  background: rgba(104, 79, 255, 0.1);
  border-radius: 4.0rem;

  > svg{
    width: 2.667rem;
    height: 2.133rem;
    color: #ED1CA6;
  }

  @media ${theme.media.lteMedium}{

  }
  `}
`;

export const GroupIcon = styled.div`
${({ theme }) => css`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  > a{
    width:4.3rem;
    height:4.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${theme.colors.gray_100} ;
    border-radius: 4.3rem;
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    &:active{
      background: ${theme.colors.secondaryColor};

      > svg{
        color:${theme.colors.white};
      }
    }

    &:hover{
      border-color: ${theme.colors.secondaryColor};
    }

    > svg{
      width: 2rem;
      height: 2rem;
      color: ${theme.colors.primaryColor};
    }
  }

  @media ${theme.media.lteMedium}{

  }
  `}
`;
