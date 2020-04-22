import React from 'react';

import ArticleData from './ArticleData';

export default {
  component: ArticleData,
  title: 'Molecules/ArticleData',
};

const article = {
  name: 'Summer Jacket Performance with a Print',
  price: 75.9,
};

export const Default = () => <ArticleData article={article} />;

const reducedArticle = {
  name: 'Summer Jacket Performance with a Print',
  price: 60,
  listPrice: 75.9,
};

export const ReducedArticle = () => <ArticleData article={reducedArticle} />;
