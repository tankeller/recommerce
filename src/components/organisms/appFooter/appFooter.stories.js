import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import AppFooter from './AppFooter';

export default {
  title: 'Organisms/AppFooter',
  component: AppFooter,
  decorators: [withKnobs],
};

export const Default = () => <AppFooter />;
