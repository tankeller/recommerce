/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { processArticle } from '../assets/utils/api/shopwareArticleProcessor';

import useSalesChannelAPI from '../assets/hooks/useSalesChannelAPI';

import SectionWrapper from '../components/atoms/sectionWrapper/SectionWrapper';
import ArticleMedia from '../components/organisms/articleMedia/ArticleMedia';

const Article = ({ articleID }) => {
  // eslint-disable-next-line
  const { loading, results, error } = useSalesChannelAPI(
    `/sales-channel-api/v1/product/${articleID}`
  );

  if (loading) {
    return loading && <p>Loading article</p>;
  }

  let article = processArticle(results);

  return (
    <SectionWrapper>
      <ArticleDetail>
        <ArticleMedia article={article}></ArticleMedia>
        <ArticleData article={article}>
          <p>Nummer: {article.id}</p>
          <p>Name: {article.name}</p>
          <p>Hersteller: {article.supplier}</p>
          <p>Preis: {article.price}</p>
          <p>Beschreibung: {article.description}</p>
        </ArticleData>
      </ArticleDetail>
    </SectionWrapper>
  );
};

export const ArticleDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ArticleData = styled.div`
  width: 50%;
`;

export default Article;
