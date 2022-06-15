import { renderTheme } from '../../styles/render-theme';
import { Contact } from '.';

describe('<Contact/>', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
