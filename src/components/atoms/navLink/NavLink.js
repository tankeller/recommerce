/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

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

export default NavLink;
