import React from 'react';
import PropTypes from 'prop-types';

import PriceLabel from '../../atoms/priceLabel/PriceLabel';

const PriceContainer = ({article, className, ...restProps}) => {
    return (
        <div className={`pricebox ${className}`} {...restProps}>
            {article.oldPrice ? 
            <PriceLabel price={article.oldPrice} crossed={true}/>
            : null}
            <PriceLabel price={article.price} />
        </div>
    )
}

PriceContainer.defaultProps = {
    className: ''
}

PriceContainer.propTypes = {
    article: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default PriceContainer;