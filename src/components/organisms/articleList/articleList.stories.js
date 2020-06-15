/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withKnobs, select } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import ArticleList from './ArticleList';
import articles from '../../../assets/static/articles_sw.json';

export default {
  component: ArticleList,
  title: 'Organisms/ArticleList',
  decorators: [withKnobs],
};

export const Default = () => <StyledArticleList articles={articles} />;

const StyledArticleList = styled((props) => (
  <ArticleList
    boxLayout={select('Box Layout', ['basic', 'list', 'image'])}
    {...props}
  />
))`
  > [class*='StyledArticleBox'] {
    flex-basis: 25%;
    max-width: 25%;
    padding: 0 5px;

    img {
      max-width: 100%;
    }
  }
`;
