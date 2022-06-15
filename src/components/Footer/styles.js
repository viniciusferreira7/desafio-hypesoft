import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.footer`
${({ theme }) => css`
    width: 26.3rem;
    margin:0 auto;
    margin-top: 23.8rem;
    margin-bottom: 17.8rem;
    text-align: center;

    @media ${theme.media.lteMedium}{
      margin-top: 3rem;
      margin-bottom: 2.4rem;
    }

  > img{
    width:26.3rem;
    height: 5.9rem;
  }

  ${TextComponent}{
    padding:1.6rem 0 0 0;

    > span {
      color:#ED1CA6;
    }

    > strong{
      color:${theme.colors.secondaryColor};
    }
  }
`}
`;
