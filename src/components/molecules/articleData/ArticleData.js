/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import Title from '../../atoms/title/Title';
import PriceContainer from '../../molecules/priceContainer/PriceContainer';

const ArticleData = ({ article, ...props }) => {
  return (
    <div
      css={{
        margin: '0 auto',
        textAlign: 'center',
        padding: '5px',
      }}
      {...props}
    >
      <Title>{article.name}</Title>
      <PriceContainer article={article} />
    </div>
  );
};

ArticleData.defaultProps = {
  className: '',
};

ArticleData.propTypes = {
  article: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ArticleData;
