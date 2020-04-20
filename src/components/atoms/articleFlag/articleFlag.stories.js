import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ArticleFlag from './ArticleFlag';

export default {
  title: 'ArticleFlag',
  component: ArticleFlag,
  decorators: [withKnobs],
};

export const Default = () => <ArticleFlag> New </ArticleFlag>;
