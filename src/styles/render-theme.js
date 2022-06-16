import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ToggleThemeContext } from '../ToggleThemeContext/index.';
import { theme } from './theme';

export const renderTheme = (children) => {
  return render(
    <ToggleThemeContext>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ToggleThemeContext>,
  );
};
