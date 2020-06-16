/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useContext } from 'react';
import { ListingContext } from '../../../pages/Listing';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import ArticleBox from '../articleBox/ArticleBox';

const ArticleList = ({ articles, boxLayout, ...props }) => {
  const theme = useTheme();
  const context = useContext(ListingContext);

  // Custom boxLayout as optional prop (no context available)
  const customBoxLayout =
    !context.boxLayout && boxLayout !== 'undefined' ? boxLayout : '';

  return (
    <StyledArticleList {...props}>
      {articles.map((article) => {
        return (
          <StyledArticleBox
            key={article.id}
            theme={theme}
            article={article}
            context={context}
            boxLayout={customBoxLayout}
          />
        );
      })}
    </StyledArticleList>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  boxLayout: PropTypes.oneOf(['', 'basic', 'list', 'image']),
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

export const StyledArticleBox = styled((props) => <ArticleBox {...props} />)`
  
  ${(props) =>
    (props.context.boxLayout === 'basic' || props.boxLayout === 'basic') &&
    css`
      flex-basis: 20%;
      max-width: 20%;
      padding: 0 5px;

      @media ${props.theme.screen.mobilePortrait} {
        flex-basis: 100%;
        max-width: 100%;
      }

      @media ${props.theme.screen.mobileLandscape} {
        flex-basis: 50%;
        max-width: 50%;
      }

      @media ${props.theme.screen.tabletPortrait} {
        flex-basis: 33.33%;
        max-width: 33.33%;
      }

      @media ${props.theme.screen.tabletLandscape} {
        flex-basis: 25%;
        max-width: 25%;
      }
    `}

  ${(props) =>
    (props.context.boxLayout === 'list' || props.boxLayout === 'list') &&
    css`
      flex-basis: 100%;
      max-width: 100%;
    `}

  ${(props) =>
    (props.context.boxLayout === 'image' || props.boxLayout === 'image') &&
    css`
      flex-basis: 25%;
      max-width: 25%;
      padding: 0 5px;

      @media ${props.theme.screen.mobilePortrait} {
        flex-basis: 100%;
        max-width: 100%;
      }

      @media ${props.theme.screen.mobileLandscape} {
        flex-basis: 50%;
        max-width: 50%;
      }

      @media ${props.theme.screen.tabletPortrait} {
        flex-basis: 33.33%;
        max-width: 33.33%;
      }
    `}

`;
