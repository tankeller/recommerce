// themeDecorator.js
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../src/assets/theme';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
