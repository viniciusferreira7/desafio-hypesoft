import { GridDot } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridDot/>', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridDot />);
    expect(container).toMatchSnapshot();
  });
});
