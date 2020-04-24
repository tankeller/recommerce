/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const PriceLabel = ({
  price,
  crossed,
  currency,
  currencyPosition,
  ...props
}) => {
  return (
    <span
      css={{
        fontSize: crossed ? '1rem' : '1.25rem',
        lineHeight: '1.5rem',
        color: '#828282',
        textDecoration: crossed ? 'line-through' : 'none',
        marginRight: crossed ? 3 : 0,
      }}
      {...props}
    >
      {currencyPosition === 'trailing' ? price + currency : currency + price}
    </span>
  );
};

PriceLabel.defaultProps = {
  crossed: false,
  currency: '€',
  currencyPosition: 'trailing',
};

PriceLabel.propTypes = {
  price: PropTypes.number.isRequired,
  crossed: PropTypes.bool,
  currency: PropTypes.string,
  currencyPosition: PropTypes.oneOf(['leading', 'trailing']),
};

export default PriceLabel;
