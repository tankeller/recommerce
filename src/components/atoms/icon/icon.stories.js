import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import 'font-awesome/css/font-awesome.min.css';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Atoms/Icon',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Handy status label',
  },
};

export const Default = () => <Icon name={text('iconName', 'shopping-cart')} />;
