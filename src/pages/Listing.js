/** @jsx jsx */
import { jsx } from '@emotion/core';

import PageTemplate from '../components/templates/PageTemplate';
import ArticleList from '../components/organisms/articleList/ArticleList';
import CategoryHeader from '../components/organisms/categoryHeader/CategoryHeader';

import articles from '../assets/static/articles.json';
import categories from '../assets/static/categories.json';

const Listing = ({ categoryID }) => {
  // Articles by categoryID
  const categoryArticles = articles.filter((article) => {
    return article.categoryID === parseInt(categoryID);
  });

  // Articles Fallback: All articles
  const currentArticles =
    categoryArticles.length !== 0 ? categoryArticles : articles;

  // CategoryData
  const currentCategory = categories.filter((category) => {
    return category.id === parseInt(categoryID);
  });

  return (
    <div>
      <CategoryHeader categoryName={currentCategory[0].name} />
      <PageTemplate>
        <ArticleList articles={currentArticles} />
      </PageTemplate>
    </div>
  );
};

export default Listing;
