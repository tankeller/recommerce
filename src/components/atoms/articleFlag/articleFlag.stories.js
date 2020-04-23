import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import ArticleFlag from './ArticleFlag';

export default {
  title: 'Atoms/ArticleFlag',
  component: ArticleFlag,
  decorators: [withKnobs],
};

export const NewFlag = () => (
  <ArticleFlag> {text('Label', 'New')} </ArticleFlag>
);

export const SaleFlag = () => (
  <ArticleFlag> {text('Label', 'Sale')} </ArticleFlag>
);
