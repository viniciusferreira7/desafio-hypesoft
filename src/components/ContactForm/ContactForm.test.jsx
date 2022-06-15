import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { ContactForm } from '.';

describe('<ContactForm/>', () => {
  it('should render with default values', () => {
    renderTheme(<ContactForm />);
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Subjects/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toHaveStyle({
      'max-width': '66.4rem',
      width: '100%',
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<ContactForm />);
    expect(container).toMatchSnapshot();
  });
});
