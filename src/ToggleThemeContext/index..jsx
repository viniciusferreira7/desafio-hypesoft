import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { theme } from '../styles/theme';
import { reducer } from './reducer';

export const ThemeContext = createContext();

export const ToggleThemeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, theme);
  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

ToggleThemeContext.propTypes = {
  children: P.node.isRequired,
};
