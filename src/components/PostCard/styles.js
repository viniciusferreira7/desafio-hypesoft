import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
${({ theme }) => css`
  background-color:${theme.colors.white} ;
  width: 424px;
  height: 452px;
  border-radius: 0.8rem;
`}
`;

export const SrcImg = styled.div`
${({ srcImg }) => css`
  width: 42.4rem;
  height: 33.2rem;
  background-image:url(${srcImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`}
`;

export const Info = styled.div`
${() => css`
  > ${TextComponent}{
    padding: 2.4rem;
    text-transform: capitalize;
  }

  > a{
    margin-left: 2.4rem;
  }
`}
`;
