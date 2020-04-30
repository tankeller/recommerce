import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import 'font-awesome/css/font-awesome.min.css';
import IconFont from './IconFont';

export default {
  component: IconFont,
  title: 'Atoms/IconFont',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle:
      'FontAwesome library (free icons) - Based on a Font file and styled by CSS',
  },
};

export const Default = () => (
  <IconFont name={text('iconName', 'shopping-cart')} />
);
