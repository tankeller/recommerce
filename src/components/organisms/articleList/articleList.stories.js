import React from 'react';

import ArticleList from './ArticleList';
import articles from '../../../assets/static/articles.json';

export default {
  component: ArticleList,
  title: 'Organisms/ArticleList',
};

export const Default = () => <ArticleList articles={articles} />;
