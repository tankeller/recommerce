import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { render } from '@testing-library/react';

import theme from '../../../assets/theme';

import Breadcrumb from './Breadcrumb';

test('Breadcrumb renders properly', () => {
  const category = {
    id: 78,
    name: 'Nostrud proident',
  };

  const { container } = render(
    <ThemeProvider theme={theme}>
      <Breadcrumb category={category} />
    </ThemeProvider>
  );

  expect(container).toHaveTextContent('Nostrud proident');
});
