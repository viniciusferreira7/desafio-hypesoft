import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { ContactForm } from '.';

describe('<Contact/>', () => {
  it('should render with default values', () => {
    renderTheme(<ContactForm>Texto</ContactForm>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
