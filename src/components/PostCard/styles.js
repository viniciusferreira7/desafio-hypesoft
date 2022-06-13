import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
  background-color:${theme.colors.white} ;
  max-width: 424px;
  width:100%;
  max-height: 452px;
  border-radius: 0.8rem;
  transition: all 300ms ease-in-out;

  @media ${theme.media.ltMedium}{
    margin-bottom: 3rem;
    max-height: none;
  }

  &:hover{
    border: 0.2rem solid #ED1CA6;
  }
`}
`;

export const SrcImg = styled.div`
${({ srcImg }) => css`
  max-width: 42.4rem;
  width:100%;
  height: 33.2rem;
  background-image:url(${srcImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`}
`;

export const Info = styled.div`
${({ theme }) => css`
  transition: all 300ms ease-in-out;

  > ${TextComponent}{
    padding: 2.4rem;
    text-transform: capitalize;
  }

  > a{
    margin-left: 2.4rem;

    @media ${theme.media.ltMedium}{
       > img {
        margin-bottom: 2rem;
      }
    }

  }

  &:hover{

    ${TextComponent}{
      color:#ED1CA6;
    }
  }
`}
`;
