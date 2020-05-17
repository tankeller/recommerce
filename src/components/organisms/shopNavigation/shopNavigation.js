/** @jsx jsx */
import { jsx } from '@emotion/core';

import Logo from '../../atoms/logo/Logo';
import ShopActionsMenu from '../../molecules/shopActionsMenu/ShopActionsMenu';

const ShopNavigation = ({ props }) => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: '100px',
      }}
      {...props}
    >
      <Logo />
      <ShopActionsMenu />
    </div>
  );
};

export default ShopNavigation;
