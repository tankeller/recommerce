/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';
import Proptypes from 'prop-types';

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      css={{
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'darkgray',
        '&:hover': {
          color: 'darkgreen',
        },
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  children: Proptypes.any.isRequired,
};

export default NavLink;
