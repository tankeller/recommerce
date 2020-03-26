import React from 'react';
import PropTypes from 'prop-types';

import './priceLabel.css';

const currencyPositions = {
    LEADING: 'leading',
    TRAILING: 'trailing'
}

const PriceLabel = ({ className, price, currency, currencyPosition}) => {
    return (
        <span className={`${className} price-label`}>
            {currencyPosition === currencyPositions.TRAILING ? price + currency : currency + price}
        </span>
    )
}

PriceLabel.defaultProps = {
    className: '',
    price: 0,
    currency: '€',
    currencyPosition: currencyPositions.TRAILING
}

PriceLabel.propTypes = {
    className: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    currencyPosition: PropTypes.string
}

export default PriceLabel;