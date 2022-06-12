import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css`
  width: 15.2rem;
  height: 6.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`}
`;

export const Dot = styled.div`
  ${({ color }) => css`
    background: ${color};
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.8rem;
  `}`;
