import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  width: 100%;
  display: flex;
  padding: 10rem;
  justify-content: center;

  @media ${theme.media.lteMedium}{
    padding: 2rem;
    flex-direction: column;
  }
  `}
`;
