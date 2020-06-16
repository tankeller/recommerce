/** @jsx jsx */
import { jsx } from '@emotion/core';

import PageTemplate from '../components/templates/PageTemplate';
import SectionWrapper from '../components/atoms/sectionWrapper/SectionWrapper';
import ArticleList from '../components/organisms/articleList/ArticleList';
import CategoryHeader from '../components/organisms/categoryHeader/CategoryHeader';

import useDataFetching from '../assets/hooks/useDataFetching';
import articles from '../assets/static/articles.json';
import mockCategories from '../assets/static/categories.json';

const Listing = ({ categoryID }) => {
  let currentArticles = [];

  const { loading, results, error } = useDataFetching(
    `/store-api/v1/product-listing/${categoryID}`,
    {
      includes: {
        product_listing_sorting: ['key'],
        product_manufacturer: ['id', 'name'],
        price_aggregation: ['min', 'max'],
        product_group: ['id', 'name', 'options'],
        product_group_option: ['id', 'name'],
        product: ['id', 'name', 'calculatedPrice', 'cover'],
        media: ['id', 'url'],
        product_media: ['media'],
        calculated_price: ['unitPrice', 'totalPrice'],
      },
    }
  );

  if (loading) {
    return <p>...Loading Articles</p>;
  } else if (error) {
    // Articles by categoryID
    const categoryArticles = articles.filter((article) => {
      return article.categoryID === parseInt(categoryID);
    });

    // Articles Fallback: All articles
    currentArticles =
      categoryArticles.length !== 0 ? categoryArticles : articles;
  } else if (results) {
    currentArticles = results.elements;
  }

  // CategoryData
  const currentCategory = mockCategories.filter((category) => {
    return category.id === parseInt(categoryID);
  });

  // BoxLayout Fallback
  if (currentCategory.length === 0) {
    currentCategory[0] = mockCategories[0];
  }
  const boxLayout = !currentCategory[0].layout
    ? 'basic'
    : currentCategory[0].layout;

  return (
    <SectionWrapper>
      <CategoryHeader categoryName={currentCategory[0].name} />
      <PageTemplate>
        <ArticleList articles={currentArticles} boxLayout={boxLayout} />
      </PageTemplate>
    </SectionWrapper>
  );
};

export default Listing;
