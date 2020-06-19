function showGrossPrices() {
  return true;
}

export default function processShopwareArticleData(shopwareArticles) {
  const processedArticles = shopwareArticles.map((article) => {
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
  });

  return processedArticles;
}
