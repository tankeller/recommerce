/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const NavListElement = ({ isActive, children, ...props }) => {
  return (
    <li
      css={{
        padding: '4px 8px',
        borderBottom: isActive ? '2px' : '',
        borderBottomColor: isActive ? 'darkgreen' : '',
        borderBottomStyle: isActive ? 'solid' : '',
        listStyle: 'none',
      }}
      {...props}
    >
      {children}
    </li>
  );
};

NavListElement.defaultProps = {
  isActive: false,
};

NavListElement.propTypes = {
  isActive: PropTypes.bool,
};

export default NavListElement;
