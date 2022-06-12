import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { About } from '.';
import data from './data';

describe('<About/>', () => {
  it('should render with default values', () => {
    renderTheme(<About {...data} />);
    expect(screen.getByText(/Software/i)).toBeInTheDocument();
    expect(screen.getByText(/Morbi/i)).toBeInTheDocument();
    expect(screen.getByText(/17/i)).toBeInTheDocument();
    expect(screen.getByText(/325/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Arrow/i)).toHaveAttribute(
      'src',
      'assets/images/Group.png',
    );
  });

  it('should march snapshot', () => {
    const { container } = renderTheme(<About {...data} />);

    expect(container).toMatchSnapshot();
  });
});
