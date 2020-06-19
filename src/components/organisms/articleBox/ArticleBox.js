/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { useContext } from 'react';
import { Link } from '@reach/router';
import { ListingContext } from '../../../pages/Listing';
import PropTypes from 'prop-types';

import Img from '../../atoms/img/Img';

import ArticleData from '../../molecules/articleData/ArticleData';

const ArticleBox = ({ article, boxLayout, ...props }) => {
  const theme = useTheme();
  const context = useContext(ListingContext);

  // Custom boxLayout as optional prop (no context available)
  const customBoxLayout =
    !context.boxLayout && boxLayout !== 'undefined' ? boxLayout : '';

  return (
    <StyledArticleBox
      theme={theme}
      context={context}
      boxLayout={customBoxLayout}
      {...props}
    >
      <StyledArticleBoxLink to={`/article/${article.id}`} context={context}>
        <ImageWrapper context={context} boxLayout={customBoxLayout}>
          <Img src={article.img} alt={article.name} />
        </ImageWrapper>
        <StyledArticleData
          article={article}
          context={context}
          boxLayout={customBoxLayout}
        />
      </StyledArticleBoxLink>
    </StyledArticleBox>
  );
};

ArticleBox.defaultProps = {
  className: '',
  boxLayout: '',
};

ArticleBox.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object.isRequired,
  boxLayout: PropTypes.oneOf(['', 'basic', 'list', 'image']),
};

export default ArticleBox;

/**
 * Styling
 */
export const StyledArticleBox = styled.div`
  margin-bottom: 10px;

  ${(props) =>
    (props.context.boxLayout === 'basic' || props.boxLayout === 'basic') &&
    css`
      text-align: center;
    `}

  ${(props) =>
    (props.context.boxLayout === 'image' || props.boxLayout === 'image') &&
    css`
      position: relative;
    `}
`;

export const StyledArticleBoxLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;

  ${(props) =>
    props.context.boxLayout === 'list' &&
    css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      @media ${props.theme.screen.mobilePortrait} {
        flex-direction: column;
      }
    `}
`;

export const ImageWrapper = styled.div`
  text-align: center;

  ${(props) =>
    (props.context.boxLayout === 'list' || props.boxLayout === 'list') &&
    css`
      @media ${props.theme.screen.mobileLandscapeUp} {
        width: 30%;
      }
    `}

  img {
    margin: 0 auto;
  }
`;

export const StyledArticleData = styled(ArticleData)`
  ${(props) =>
    (props.context.boxLayout === 'image' || props.boxLayout === 'image') &&
    css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      background: rgba(255, 255, 255, 0.9);
      opacity: 0;

      &:hover {
        opacity: 1;
        box-shadow: ${props.theme.boxShadow.base};
      }
    `}

  ${(props) =>
    (props.context.boxLayout === 'list' || props.boxLayout === 'list') &&
    css`
      @media ${props.theme.screen.mobileLandscapeUp} {
        width: 70%;
      }
    `}
`;
