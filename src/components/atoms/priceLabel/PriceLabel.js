/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const PriceLabel = ({ className, price, crossed, currency, currencyPosition, ...restProps}) => {    
    return (
        <span
            css={{
                fontSize: crossed ?  '1rem' : '1.25rem',
                lineHeight: '1.5rem',
                color: '#828282',
                textDecoration: crossed ? 'line-through' : 'none',
                marginRight: crossed ? 3 : 0
            }}
            className={`${className} price-label`} {...restProps}>
            {currencyPosition === 'trailing' ? price + currency : currency + price}
        </span>
    )
}

PriceLabel.defaultProps = {
    className: '',
    crossed: false,
    currency: '€',
    currencyPosition: 'trailing'
}

PriceLabel.propTypes = {
    className: PropTypes.string,
    price: PropTypes.number.isRequired,
    crossed: PropTypes.bool,
    currency: PropTypes.string,
    currencyPosition: PropTypes.oneOf(['leading', 'trailing'])
}

export default PriceLabel;