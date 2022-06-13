import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Stack } from '.';

describe('<Stack/>', () => {
  it('should render with default values', () => {
    renderTheme(<Stack title="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Stack title="test" />);
    expect(container).toMatchSnapshot();
  });
});
