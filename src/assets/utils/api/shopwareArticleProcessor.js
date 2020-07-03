import mockArticles from '../../static/articles_sw.json';

function showGrossPrices() {
  return true;
}

export const processArticle = (article) => {
  if (!article) {
    article = mockArticles[0];
    return article;
  }

  return {
    active: article.active,
    id: article.id,
    img: article.cover.media.url,
    name: article.name,
    supplier: 'Marvel',
    categoryID: article.categoryTree.slice(-1, 0),
    price: showGrossPrices() ? article.price[0].gross : article.price[0].net,
    listPrice: article.price.listPrice ? article.price.listPrice : null,
    isNew: article.isNew,
    stock: article.stock,
    description: article.description,
    closeout: article.isCloseout,
  };
};

export default function processShopwareArticleData(shopwareArticles) {
  const processedArticles = shopwareArticles.map((article) => {
    return processArticle(article);
  });

  return processedArticles;
}
