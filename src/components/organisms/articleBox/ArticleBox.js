/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import Img from '../../atoms/img/Img';

import ArticleData from '../../molecules/articleData/ArticleData';

const ArticleBox = ({ article, boxLayout, ...props }) => {
  const theme = useTheme();

  return (
    <StyledArticleBox theme={theme} boxLayout={boxLayout} {...props}>
      <StyledArticleBoxLink href={`/${article.name}`} boxLayout={boxLayout}>
        <ImageWrapper boxLayout={boxLayout}>
          <Img src={article.img} alt={article.name} />
        </ImageWrapper>
        <StyledArticleData article={article} boxLayout={boxLayout} />
      </StyledArticleBoxLink>
    </StyledArticleBox>
  );
};

ArticleBox.defaultProps = {
  className: '',
};

ArticleBox.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object.isRequired,
  boxLayout: PropTypes.oneOf(['basic', 'list', 'image']),
};

export default ArticleBox;

/**
 * Styling
 */
export const StyledArticleBox = styled.div`
  margin-bottom: 10px;

  ${({ boxLayout }) =>
    boxLayout === 'basic' &&
    css`
      text-align: center;
    `}

  ${({ boxLayout }) =>
    boxLayout === 'image' &&
    css`
      position: relative;
    `}
`;

export const StyledArticleBoxLink = styled.a`
  width: 100%;
  text-decoration: none;
  color: inherit;

  ${({ theme, boxLayout }) =>
    boxLayout === 'list' &&
    css`
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      @media ${theme.screen.mobilePortrait} {
        flex-direction: column;
      }
    `}
`;

export const ImageWrapper = styled.div`
  ${({ theme, boxLayout }) =>
    boxLayout === 'list' &&
    css`
      @media ${theme.screen.mobileLandscapeUp} {
        width: 30%;
      }
    `}

  img {
    margin: 0 auto;
  }
`;

export const StyledArticleData = styled(ArticleData)`
  ${({ theme, boxLayout }) =>
    boxLayout === 'image' &&
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
        box-shadow: ${theme.boxShadow.base};
      }
    `}

  ${({ theme, boxLayout }) =>
    boxLayout === 'list' &&
    css`
      @media ${theme.screen.mobileLandscapeUp} {
        width: 70%;
      }
    `}
`;
