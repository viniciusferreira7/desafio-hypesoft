import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) =>
    css`
      background: ${theme.colors.primaryColor};
    `}
  color: white;
`;
