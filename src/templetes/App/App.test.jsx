import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getbyRole('heading', { name: 'Hello' }).parentElement;
  expect(headingContainer).toHaveStyle(`background: ${theme.colors.secondaryBg}`);
});
