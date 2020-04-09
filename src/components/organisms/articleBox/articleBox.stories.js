import React from 'react';

import ArticleBox from './ArticleBox';

export default {
    component: ArticleBox,
    title: 'Organism/ArticleBox'
}

const article = {
    name: 'Summer Jacket Performance',
    price: 75.90,
    img: 'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
}

export const Default = () => <ArticleBox style={{'max-width': '25%'}} article={article} />


const articleWithLongTitle = {
    name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
    price: 75.90,
    img: 'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
}

export const LongTitle = () => <ArticleBox style={{'max-width': '25%'}} article={articleWithLongTitle} />


const articleWithPseudoPrice = {
    name: 'Summer Jacket Performance',
    price: 75.90,
    oldPrice: 99,
    img: 'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
}

export const ReducedArticle = () => <ArticleBox style={{'max-width': '25%'}} article={articleWithPseudoPrice} />

const articleWithLongTitlePseudoPrice = {
    name: 'Summer Jacket Performance with Pockets and a Weatherprotective',
    price: 75.90,
    oldPrice: 99,
    img: 'https://demo.storefrontcloud.io/img/310/300/resize/m/j/mj11-black_main.jpg'
}

export const LongTitleReducedArticle = () => <ArticleBox style={{'max-width': '25%'}} article={articleWithLongTitlePseudoPrice} />