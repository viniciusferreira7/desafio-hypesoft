import React from 'react';

import { createRoot } from 'react-dom/client';

import { Home } from './templetes/Home';
import { ToggleThemeContext } from './ToggleThemeContext/index.';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToggleThemeContext>
      <Home />
    </ToggleThemeContext>
  </React.StrictMode>,
);
