/** @jsx jsx */
import { jsx } from '@emotion/core';

import ArticleBox from '../articleBox/ArticleBox';

const ArticleList = ({ articles, columns, ...restprops }) => {
  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        alignItems: 'stretch',
      }}
      {...restprops}
    >
      {articles.map((article) => {
        return (
          <ArticleBox
            css={{
              padding: '0% 1%',
              flexBasis: '24%',
            }}
            article={article}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;
