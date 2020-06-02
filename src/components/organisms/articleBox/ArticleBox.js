/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Img from '../../atoms/img/Img';

import ArticleData from '../../molecules/articleData/ArticleData';

const ArticleBox = ({ article, ...props }) => {
  return (
    <StyledArticleBox {...props}>
      <StyledArticleBoxLink href={`/${article.name}`}>
        <Img src={article.img} alt={article.name} />
        <ArticleData article={article} />
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
};

export default ArticleBox;

export const StyledArticleBox = styled.div`
  text-align: center;

  img {
    margin: 0 auto;
  }
`;

export const StyledArticleBoxLink = styled.a`
  text-decoration: none;
`;
