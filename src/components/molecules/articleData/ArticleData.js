/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Title from '../../atoms/title/Title';
import PriceContainer from '../../molecules/priceContainer/PriceContainer';

const ArticleData = ({ article, boxLayout, ...props }) => {
  return (
    <StyledArticleData {...props}>
      <Title>{article.name}</Title>
      <PriceContainer article={article} />
    </StyledArticleData>
  );
};

ArticleData.defaultProps = {
  className: '',
};

ArticleData.propTypes = {
  article: PropTypes.object.isRequired,
  boxLayout: PropTypes.oneOf(['basic', 'list', 'image']),
  className: PropTypes.string,
};

export default ArticleData;

/**
 * Styling
 */
export const StyledArticleData = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 5px;
`;
