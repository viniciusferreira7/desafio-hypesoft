import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ContactInfo } from '.';

describe('<ContactInfo/>', () => {
  it('should render with default values', () => {
    renderTheme(<ContactInfo email="test@gmail.com" phone="999999" />);
    expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('999999')).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i).parentElement).toHaveAttribute(
      'href',
      'https://github.com/viniciusferreira7',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <ContactInfo email="test@gmail.com" phone="999999" />,
    );
    expect(container).toMatchSnapshot();
  });
});
