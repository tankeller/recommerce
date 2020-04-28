import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../../assets/theme';

import CategoryHeadline from './CategoryHeadline';

export default {
  title: 'Atoms/CategoryHeadline',
  component: CategoryHeadline,
  decorators: [withKnobs],
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <CategoryHeadline>{text('Categoryname', 'Furniture')}</CategoryHeadline>
  </ThemeProvider>
);
