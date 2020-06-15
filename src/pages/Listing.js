/** @jsx jsx */
import { jsx } from '@emotion/core';
import { createContext, useContext } from 'react';

import PageTemplate from '../components/templates/PageTemplate';
import SectionWrapper from '../components/atoms/sectionWrapper/SectionWrapper';
import ArticleList from '../components/organisms/articleList/ArticleList';
import CategoryHeader from '../components/organisms/categoryHeader/CategoryHeader';

import articles from '../assets/static/articles_sw.json';
import categories from '../assets/static/categories_sw.json';

// Default ListingContext
export let ListingContext = createContext({
  boxLayout: '',
  category: {
    name: '',
    id: '',
    articles: [],
  },
});

const Listing = ({ categoryID }) => {
  const context = useContext(ListingContext);

  // Articles by categoryID
  const categoryArticles = articles.filter((article) => {
    return article.categoryID === categoryID;
  });

  // Articles Fallback: All articles
  const currentArticles =
    categoryArticles.length !== 0 ? categoryArticles : articles;

  // CategoryData
  const currentCategory = categories.filter((category) => {
    return category.id === categoryID;
  });

  // BoxLayout incl. fallback
  context.boxLayout = !currentCategory[0].layout
    ? 'basic'
    : currentCategory[0].layout;

  // Update ListingContext
  context.category.name = currentCategory[0].name;
  context.category.id = currentCategory[0].id;
  context.category.articles = categoryArticles;

  return (
    <SectionWrapper>
      <ListingContext.Provider value={context}>
        <CategoryHeader categoryName={currentCategory[0].name} />
        <PageTemplate>
          <ArticleList articles={currentArticles} />
        </PageTemplate>
      </ListingContext.Provider>
    </SectionWrapper>
  );
};

export default Listing;
