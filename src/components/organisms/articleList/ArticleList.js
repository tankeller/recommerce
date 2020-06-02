/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../../assets/theme';
// import PropTypes from 'prop-types';

import ArticleBox from '../articleBox/ArticleBox';

const ArticleList = ({ articles, ...props }) => {
  return (
    <StyledArticleList {...props}>
      {articles.map((article) => {
        return <StyledArticleBox key={article.id} article={article} />;
      })}
    </StyledArticleList>
  );
};

export default ArticleList;

/**
 * Styling
 */
export const StyledArticleList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: stretch;
`;

export const StyledArticleBox = styled(ArticleBox)`
  flex-basis: 25%;
  max-width: 25%;
  padding: 0 5px;

  @media ${theme.screen.mobilePortrait} {
    flex-basis: 100%;
    max-width: 100%;
  }

  @media ${theme.screen.mobileLandscape} {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media ${theme.screen.tabletPortrait} {
    flex-basis: 33.33%;
    max-width: 33.33%;
  }
`;
