/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withKnobs, select } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import ArticleBox from './ArticleBox';

export default {
  component: ArticleBox,
  title: 'Organisms/ArticleBox',
  decorators: [withKnobs],
};

const article = {
  id: 1,
  name: 'Summer Jacket Performance',
  price: 75.9,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
};

export const Default = () => (
  <ArticleBox
    article={article}
    boxLayout={select('Box Layout', ['basic', 'list', 'image'])}
  />
);

/**
 * BoxLayout
 */
export const BoxList = () => <ArticleBox article={article} boxLayout="list" />;

export const BoxImage = () => (
  <ArticleBox article={article} boxLayout="image" style={{ maxWidth: '50%' }} />
);

/**
 * Title length
 */
const articleWithLongTitle = {
  id: 1,
  name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
  price: 75.9,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
};

export const LongTitle = () => (
  <StyledArticleBox article={articleWithLongTitle} />
);

/**
 * PseudoPrice
 */
const articleWithPseudoPrice = {
  id: 1,
  name: 'Summer Jacket Performance',
  price: 75.9,
  oldPrice: 99,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
};

export const ReducedArticle = () => (
  <StyledArticleBox article={articleWithPseudoPrice} />
);

/**
 * Mixed
 */
const articleWithLongTitlePseudoPrice = {
  id: 1,
  name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
  price: 75.9,
  oldPrice: 99,
  img:
    'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
};

export const LongTitleReducedArticle = () => (
  <StyledArticleBox article={articleWithLongTitlePseudoPrice} />
);

/**
 * Styling
 */
const StyledArticleBox = styled((props) => <ArticleBox {...props} />)`
  max-width: 25%;
`;
