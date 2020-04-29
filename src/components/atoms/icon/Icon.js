/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/**
 * Use `<Icon />` to include free FontAwesome icons from: https://fontawesome.com/icons?d=gallery&m=free
 */
const Icon = ({ name }) => {
  name = name.toLowerCase();
  return <i className={`fa fa-${name}`}></i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
