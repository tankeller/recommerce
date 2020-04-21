import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import MainHeaderNavigation from './MainHeaderNavigation';

import categories from '../../../assets/static/categories.json';

export default {
  title: 'Organisms/MainNavigation',
  component: MainHeaderNavigation,
  decorators: [withKnobs],
};

export const Default = () => <MainHeaderNavigation categories={categories} />;
