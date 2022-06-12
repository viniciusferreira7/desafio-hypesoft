import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Stack } from '.';

describe('<Stack/>', () => {
  it('should render with default values', () => {
    renderTheme(<Stack>Texto</Stack>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
