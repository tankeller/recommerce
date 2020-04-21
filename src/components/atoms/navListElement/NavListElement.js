/** @jsx jsx */
import { jsx } from '@emotion/core';

const NavListElement = ({ isActive, children }) => {
  return (
    <li
      css={{
        padding: '4px 8px',
        borderBottom: isActive ? '2px' : '',
        borderBottomColor: isActive ? 'darkgreen' : '',
        borderBottomStyle: isActive ? 'solid' : '',
        listStyle: 'none',
      }}
    >
      {children}
    </li>
  );
};

export default NavListElement;
