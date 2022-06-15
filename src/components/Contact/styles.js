import styled, { css } from 'styled-components';
import { Container as GridDot } from '../GridDot/styles';

export const Container = styled.section`
${({ theme }) => css`
  width: 100%;
  display: flex;
  padding: 10rem;
  align-items: center;
  margin-top: 22.7rem;
  position: relative;

  ${GridDot}{
    position: absolute;
    top: 16%;
    right:12%;
    transform: rotate(-90deg);
    opacity: 0.3;

    @media ${theme.media.lteMedium}{
      display: none;
  }
  }

  @media ${theme.media.lteMedium}{
    padding: 2rem;
    flex-direction: column;
  }
`}`;
