import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import SearchInput from './SearchInput';

export default {
  component: SearchInput,
  title: 'Atoms/SearchInput',
  decorators: [withKnobs],
};

export const Default = () => (
  <SearchInput placeholder={text('placeholder', 'Search...')} />
);
