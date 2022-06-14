import { fireEvent, screen } from '@testing-library/react';
import { Testimonial } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Testimonial/>', () => {
  it('should render with default values', () => {
    renderTheme(<Testimonial title="test" />);
    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
  });

  it('should render correctly comments', () => {
    renderTheme(<Testimonial title="test" />);
    expect(screen.getByText(/looking/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/cleber/i).parentElement);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Testimonial title="test" />);
    expect(container).toMatchSnapshot();
  });
});
