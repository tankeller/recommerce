/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/**
 * Component: `<Icon name="shopping-cart" />`
 *
 * Rendered HTML:`<i class="fa fa-shopping-cart"></i>`
 *
 * Free FontAwesome icons: https://fontawesome.com/icons?d=gallery&m=free
 */
const Icon = ({ name }) => {
  name = name.toLowerCase();
  return <i className={`fa fa-${name}`}></i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
