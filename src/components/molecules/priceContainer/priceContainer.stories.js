import React from 'react';

import PriceContianer from './PriceContainer';

export default {
  title: 'Molecules/PriceContianer',
  component: PriceContianer,
};

const article = {
  _id: 86506,
  img: 'https://www.fillmurray.com/250/250',
  name:
    'Irure ea sit ea ullamco sit deserunt in elit ut ullamco esse culpa elit',
  supplier: 'MUSAPHICS',
  price: 47.48,
  listPrice: null,
};

export const Default = () => <PriceContianer article={article} />;

const reducedArticle = {
  _id: 413505,
  img: 'https://www.fillmurray.com/250/250',
  name:
    'Aliquip labore incididunt fugiat eu non aliqua incididunt officia culpa consectetur officia sit',
  supplier: 'XSPORTS',
  price: 45.35,
  listPrice: 46.11,
};

export const ReducedArticle = () => <PriceContianer article={reducedArticle} />;
