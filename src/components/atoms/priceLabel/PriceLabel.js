/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const PriceLabel = ({
  price,
  crossed,
  currency,
  currencyPosition,
  ...props
}) => {
  // Format price into host-standard-language: 30.000,65
  const formatPrice = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  price = formatPrice(price);

  return (
    <StyledPriceLabel crossed={crossed} {...props}>
      {currencyPosition === 'trailing'
        ? `${price} ${currency}`
        : `${currency} ${price} `}
    </StyledPriceLabel>
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

/**
 * Styling
 */
export const StyledPriceLabel = styled.span`
  color: #828282;
  line-height: 1.5rem;
  font-size: ${({ crossed }) => (crossed ? '1rem' : '1.25rem')};
  text-decoration: ${({ crossed }) => (crossed ? 'line-through' : 'none')};
  margin-right: ${({ crossed }) => (crossed ? '5px' : '0')};
`;
