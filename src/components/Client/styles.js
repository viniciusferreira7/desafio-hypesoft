import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  width: 31.2rem;
  height: 10rem;
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.3), rgba(223, 227, 235, 0.3)), #FFFFFF;
  background-position: center;
  border-radius: 0.4rem;
  margin-bottom:0.375rem;
  transition: all 500ms ease-in-out;
  overflow-x: auto;
  overflow-y: hidden;

  @media ${theme.media.lteMedium}{
        width:100%;
      }

  &:active{
    background:${theme.colors.primaryColor};
  }

  &:hover{
    border: 0.3rem solid #ED1CA6;
    margin-bottom: 1rem;

    ${Photo}{
      transition: all 500ms ease-in-out;
      border: 0.05rem solid #ED1CA6;
    }

    ${Info}{
      transition: all 500ms ease-in-out;

      > ${TextComponent}{
        color: #ED1CA6;
      }
    }
  }

`}
`;

export const Photo = styled.div`
${({ theme, srcImg }) => css`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: calc(5.2rem / 2);
  background-image:url(${srcImg});
  background-size: cover;
  background-color: ${theme.colors.gray_500};
  margin: 2.4rem;
  `}
`;

export const Info = styled.div`
${() => css`
  ${TextComponent}{
    text-transform: capitalize;
    padding: 0;
    padding-bottom: 0.6rem;

    > span{
      color: #ED1CA6 ;
    }
  }
`}
`;
