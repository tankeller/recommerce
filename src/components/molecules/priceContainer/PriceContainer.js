import React from 'react';
import PropTypes from 'prop-types';

import PriceLabel from '../../atoms/priceLabel/PriceLabel';

const PriceContainer = ({ article, ...props }) => {
  return (
    <div {...props}>
      {article.listPrice ? (
        <PriceLabel price={article.listPrice} crossed={true} />
      ) : null}
      <PriceLabel price={article.price} />
    </div>
  );
};

PriceContainer.defaultProps = {
  className: '',
};

PriceContainer.propTypes = {
  article: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default PriceContainer;
