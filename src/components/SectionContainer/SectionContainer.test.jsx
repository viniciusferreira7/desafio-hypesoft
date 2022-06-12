import { screen } from '@testing-library/react';

import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<SectionContainer/>', () => {
  it('should render SectionContainer', () => {
    renderTheme(<SectionContainer>Texto</SectionContainer>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should render styles', () => {
    renderTheme(<SectionContainer>Texto</SectionContainer>);
    expect(screen.getByText('Texto')).toHaveStyle(
      `padding: ${theme.spacings.large}`,
    );
  });
});
