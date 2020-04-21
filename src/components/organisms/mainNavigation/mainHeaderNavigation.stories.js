import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import MainHeaderNavigation from './MainHeaderNavigation';

export default {
  title: 'Organisms/MainNavigation',
  component: MainHeaderNavigation,
  decorators: [withKnobs],
};

const categories = [
  {
    id: 1,
    name: 'Category 1',
    seotext: 'You can buy all the stuff here',
    active: true,
  },
  {
    id: 2,
    name: 'Category 2',
    seotext: 'You can buy all the stuff here',
    active: false,
  },
  {
    id: 1,
    name: 'Category 3',
    seotext: 'You can buy all the stuff here',
    active: false,
  },
  {
    id: 1,
    name: 'Category 4',
    seotext: 'You can buy all the stuff here',
    active: false,
  },
];

export const Default = () => <MainHeaderNavigation categories={categories} />;
