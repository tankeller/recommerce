import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/title/Title';
import PriceContainer from '../../molecules/priceContainer/PriceContainer';

import './articledata.css';

const ArticleData = ({article, className, ...restProps}) => {
    return (
        <div className={`articleData ${className}`} {...restProps}>
            <Title>{article.name}</Title>
            <PriceContainer article={article} />
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