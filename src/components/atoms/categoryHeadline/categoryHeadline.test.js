import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import CategoryHeadline from './CategoryHeadline';

import theme from '../../../assets/theme';

test('<CategoryHeadline> renders properly with given Title', () => {
  const headlineText = 'Shoes';
  const { container } = render(
    <ThemeProvider theme={theme}>
      <CategoryHeadline>{headlineText}</CategoryHeadline>
    </ThemeProvider>
  );

  expect(container).toHaveTextContent(headlineText);
});
