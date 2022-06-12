import styled, { css } from 'styled-components';

export const Container = styled.div`
${() => css``}
`;

export const Info = styled.div`
${() => css`
  max-width:75.8rem;
  `}
`;

export const ButtonGroup = styled.div`
${() => css`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`}`;
