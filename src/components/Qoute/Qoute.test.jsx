import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Qoute } from '.';

const mock = {
  comments: `“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”`,
  rating: 5.0,
};

describe('<Qoute/>', () => {
  it('should render with default values', () => {
    renderTheme(<Qoute {...mock} />);
    expect(screen.getByText(/if/i)).toBeInTheDocument();
    expect(screen.getByText(/Star Rating/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Star/i)).toHaveAttribute(
      'src',
      'assets/images/start.png',
    );
    expect(screen.getByAltText(/qoute 1/i)).toHaveAttribute(
      'src',
      'assets/images/qoute.png',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Qoute {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
