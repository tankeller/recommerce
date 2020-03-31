import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/title/Title';
import PriceLabel from '../../atoms/priceLabel/PriceLabel';

import './articledata.css';

const ArticleData = ({article, className, ...restProps}) => {
    return (
        <div className={`articleData ${className}`} {...restProps}>
            <Title>{article.name}</Title>
            <PriceLabel price={article.price} />
        </div>
    )
}

ArticleData.defaultProps = {
    className: '',
}

ArticleData.propTypes = {
    article: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default ArticleData;