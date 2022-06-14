import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { Contact } from '.';

describe('<Contact/>', () => {
  it('should render with default values', () => {
    renderTheme(<Contact>Texto</Contact>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
