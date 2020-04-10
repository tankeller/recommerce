import React from 'react';

import ArticleBox from './ArticleBox';

export default {
  component: ArticleBox,
  title: 'Organisms/ArticleBox'
};

const article = {
  id: 1,
  name: 'Summer Jacket Performance',
  price: 75.9,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
};

export const Default = () => (
  <ArticleBox style={{ 'max-width': '25%' }} article={article} />
);

const articleWithLongTitle = {
  id: 1,
  name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
  price: 75.9,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
};

export const LongTitle = () => (
  <ArticleBox style={{ 'max-width': '25%' }} article={articleWithLongTitle} />
);

const articleWithPseudoPrice = {
  id: 1,
  name: 'Summer Jacket Performance',
  price: 75.9,
  oldPrice: 99,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
};

export const ReducedArticle = () => (
  <ArticleBox style={{ 'max-width': '25%' }} article={articleWithPseudoPrice} />
);

const articleWithLongTitlePseudoPrice = {
  id: 1,
  name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
  price: 75.9,
  oldPrice: 99,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
};

export const LongTitleReducedArticle = () => (
  <ArticleBox
    style={{ 'max-width': '25%' }}
    article={articleWithLongTitlePseudoPrice}
  />
);
