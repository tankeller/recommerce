/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../../../assets/theme';
import PropTypes from 'prop-types';

import ArticleBox from '../articleBox/ArticleBox';

const ArticleList = ({ articles, boxLayout, ...props }) => {
  return (
    <StyledArticleList boxLayout={boxLayout} {...props}>
      {articles.map((article) => {
        return (
          <StyledArticleBox
            key={article.id}
            article={article}
            boxLayout={boxLayout}
          />
        );
      })}
    </StyledArticleList>
  );
};

ArticleList.propTypes = {
  boxLayout: PropTypes.oneOf(['basic', 'list', 'image']),
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
  ${(props) =>
    props.boxLayout === 'basic' &&
    css`
      flex-basis: 20%;
      max-width: 20%;
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

      @media ${theme.screen.tabletLandscape} {
        flex-basis: 25%;
        max-width: 25%;
      }
    `}

  ${(props) =>
    props.boxLayout === 'list' &&
    css`
      flex-basis: 100%;
      max-width: 100%;
    `}

  ${(props) =>
    props.boxLayout === 'image' &&
    css`
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
    `}

`;
