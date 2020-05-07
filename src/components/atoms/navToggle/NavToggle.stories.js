import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import NavToggle from './NavToggle';

export default {
  component: NavToggle,
  title: 'Atoms/NavToggle',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'The little burger for main navigation',
  },
};

export const Default = () => <NavToggle />;
