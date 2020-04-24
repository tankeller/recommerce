/** @jsx jsx */
import { jsx } from '@emotion/core';

import PageTemplate from '../components/templates/PageTemplate';
import ArticleList from '../components/organisms/articleList/ArticleList';

import articles from '../assets/static/articles.json';

const Listing = () => {
  return (
    <PageTemplate>
      <ArticleList articles={articles} />
    </PageTemplate>
  );
};

export default Listing;
