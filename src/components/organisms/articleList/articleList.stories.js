import React from 'react';

import ArticleList from './ArticleList';

export default {
  component: ArticleList,
  title: 'Organisms/ArticleList',
};

const articles = [
  {
    id: 1,
    name: 'Summer Jacket Performance',
    price: 75.9,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 2,
    name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
    price: 75.9,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 3,
    name: 'Summer Jacket Performance',
    price: 75.9,
    oldPrice: 99,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 4,
    name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
    price: 75.9,
    oldPrice: 99,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 5,
    name: 'Summer Jacket Performance',
    price: 75.9,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 6,
    name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
    price: 75.9,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 7,
    name: 'Summer Jacket Performance',
    price: 75.9,
    oldPrice: 99,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
  {
    id: 8,
    name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
    price: 75.9,
    oldPrice: 99,
    img:
      'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg',
  },
];

export const Default = () => <ArticleList articles={articles} />;
