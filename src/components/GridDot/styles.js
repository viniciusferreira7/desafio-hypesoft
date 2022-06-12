import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  width: 15.2rem;
  height: 6.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media ${theme.media.lteMedium}{
      display:none;
    }
`}
`;

export const Dot = styled.div`
  ${({ color }) => css`
    background: ${color};
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.8rem;
  `}`;
