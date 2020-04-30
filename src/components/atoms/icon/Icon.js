/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as allIcons from '@fortawesome/free-solid-svg-icons';

/**
 * Icon-list: https://fontawesome.com/icons?d=gallery&m=free
 *
 * Example (basic):
 *
 *      <Icon name="shopping-cart" />
 *
 * Option as string:
 *
 *      <Icon
 *          name="shopping-cart"
 *          option="inverse"
 *      />
 *
 * Multiple options as array:
 *
 *      <Icon
 *          name="shopping-cart"
 *          option={["inverse", "spin"]}
 *      />
 *
 * Example (advanced): https://github.com/FortAwesome/react-fontawesome
 *
 *      <Icon
 *          name="shopping-cart"
 *          option="inverse"
 *          className="custom--class"
 *          color="#000"
 *          rotation={90}
 *          size="6x"
 *      />
 */
const Icon = ({ name, option, className, ...props }) => {
  /**
   * ------------------------------------------------------------------------------------------
   * NAME: Re-convert used classname to necessary object key
   *
   * SVG icons are stored in object and we have to find the target icon by a camelCased name.
   * Example: 'faArrowDown' instead of the classname 'arrow-down'
   * ------------------------------------------------------------------------------------------
   */
  const icon = 'fa' + pascalCase(name);

  /**
   * camelCase + UPPERCASE first char
   */
  function pascalCase(str) {
    // Check for multiple words - camelCase string
    if (str.indexOf('-') > -1 || str.indexOf(' ') > -1) {
      str = str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
      });
    }

    // UpperCase 1st letter
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * ------------------------------------------------------------------------------------------
   * OPTIONS: Check the option attribute
   *
   * Depending on the variable type a combined string for FontAwesome css-classes will created.
   * Example: 'fa-inverse fa-spin' (array) or 'fa-inverse' (string)
   * ------------------------------------------------------------------------------------------
   */
  const optionClasses = optionString(option);

  /**
   * Create usable string of FontAwesome css-classes
   */
  function optionString(element) {
    let opts = '';

    if (element) {
      if (Array.isArray(element)) {
        // Option: Array
        let mapOptions = element.map((opt) => {
          return opts === '' ? 'fa-' + opt : opts + ' fa-' + opt;
        });
        opts = mapOptions.join(' ');
      } else {
        // Option: String
        opts = `fa-${element}`;
      }
    }

    return opts;
  }

  return (
    <FontAwesomeIcon
      icon={allIcons[icon]}
      className={`${optionClasses} ${className}`}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  option: '',
  className: '',
};

export default Icon;
