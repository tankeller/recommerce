/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import ArticleData from '../../molecules/articleData/ArticleData';

const ArticleBox = ({ article, ...restProps }) => {
  return (
    <div
      css={{
        textAlign: 'center'
      }}
      {...restProps}
    >
      <a
        css={{
          textDecoration: 'none'
        }}
        href={`/${article.name}`}
      >
        <img src={article.img} alt={article.name} />
        <ArticleData article={article} />
      </a>
    </div>
  );
};

ArticleBox.defaultProps = {
  className: ''
};

ArticleBox.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object.isRequired
};

export default ArticleBox;
