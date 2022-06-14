import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
    background: linear-gradient(0deg, rgba(223, 227, 235, 0.3), rgba(223, 227, 235, 0.3)), #FFFFFF;
    width: 96.4rem;
    min-height: 42.1rem;

    @media ${theme.media.lteMedium}{
      width: 100%;
      height: auto;
      padding: 0.5rem 1%;
    }

    > ${TextComponent}{
      max-width:86.4rem;
      padding: 2.6rem 5rem 5rem 5rem;

      @media ${theme.media.lteMedium}{
      width: 100%;
      font-size: 1.5rem;
      line-height: 2rem;
      padding-top: 1rem;
      height: auto;
    }
  }
`}
`;

export const Rating = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  padding:2.4rem 2.42rem 0 5.27rem;
  position: relative;

  @media ${theme.media.lteMedium}{
    padding-top: 1rem;
  }
`}
`;

export const Info = styled.div`
${() => css`
  display: flex;
  align-items: center;

  > img{
    width: 2.667rem;
    height: 2.536rem;
    margin-right: 1.067rem;
  }
`}
`;

export const Qoute = styled.div`
${({ theme }) => css`
  position: absolute;
  right: 2.42rem;

  @media ${theme.media.lteMedium}{
    right: 5rem;

    >img {
      width:2.0rem;
      height:4.0rem;
    }
    }
`}
`;
