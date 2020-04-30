/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/**
 * Component: `<IconFont name="shopping-cart" />`
 *
 * Rendered HTML:`<i class="fa fa-shopping-cart"></i>`
 *
 * Free FontAwesome icons: https://fontawesome.com/icons?d=gallery&m=free
 *
 * Example (basic):
 *
 *      <Icon name="shopping-cart" />
 *
 * Option as className:
 *
 *      <Icon
 *          name="shopping-cart"
 *          className="fa-inverse fa-spin"
 *      />
 */
const IconFont = ({ name, className, ...props }) => {
  name = name.toLowerCase();
  return <i className={`fa fa-${name} ${className}`} {...props}></i>;
};

IconFont.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

IconFont.defaultProps = {
  className: '',
};

export default IconFont;
