import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import CategoryHeadline from './CategoryHeadline';

export default {
  title: 'Atoms/CategoryHeadline',
  component: CategoryHeadline,
  decorators: [withKnobs],
};

export const Default = () => (
  <CategoryHeadline>{text('Categoryname', 'Furniture')}</CategoryHeadline>
);
