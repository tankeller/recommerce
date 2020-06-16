/** @jsx jsx */
import { jsx } from '@emotion/core';
import { createContext, useContext } from 'react';

import PageTemplate from '../components/templates/PageTemplate';
import SectionWrapper from '../components/atoms/sectionWrapper/SectionWrapper';
import ArticleList from '../components/organisms/articleList/ArticleList';
import CategoryHeader from '../components/organisms/categoryHeader/CategoryHeader';

import useDataFetching from '../assets/hooks/useDataFetching';

import articles from '../assets/static/articles_sw.json';
import mockCategories from '../assets/static/categories_sw.json';

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

  let currentArticles = [];

  const { loading, results, error } = useDataFetching(
    `/store-api/v1/product-listing/${categoryID}`
  );

  if (loading) {
    return <p>...Loading Articles</p>;
  } else if (error) {
    // Articles by categoryID
    const categoryArticles = articles.filter((article) => {
      return article.categoryID === categoryID;
    });

    // Articles Fallback: All articles
    currentArticles =
      categoryArticles.length !== 0 ? categoryArticles : articles;
  } else if (results) {
    currentArticles = results.elements;
  }

  // CategoryData
  const currentCategory = mockCategories.filter((category) => {
    return category.id === categoryID;
  });

  // BoxLayout Fallback
  if (currentCategory.length === 0) {
    currentCategory[0] = mockCategories[0];
  }

  // BoxLayout incl. fallback
  context.boxLayout = !currentCategory[0].layout
    ? 'basic'
    : currentCategory[0].layout;

  // Update ListingContext
  context.category.name = currentCategory[0].name;
  context.category.id = currentCategory[0].id;

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
