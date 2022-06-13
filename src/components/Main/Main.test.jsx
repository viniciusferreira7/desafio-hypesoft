import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Main } from '.';

describe('<Main/>', () => {
  it('should render with default values', () => {
    renderTheme(<Main>Texto</Main>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
