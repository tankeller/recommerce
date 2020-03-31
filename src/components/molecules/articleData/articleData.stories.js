import React from 'react';

import ArticleData from './ArticleData';

export default {
    component: ArticleData,
    title: 'Molecules/ArticleData'
}

const article = {
    name: 'Summer Jacket Performance with a Print',
    price: 75.90
}

export const Default = () => <ArticleData article={article}></ArticleData>