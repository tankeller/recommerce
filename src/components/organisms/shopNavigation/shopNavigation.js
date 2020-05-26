import React from 'react';

import ShopActionsMenu from '../../molecules/shopActionsMenu/ShopActionsMenu';

const ShopNavigation = ({ ...props }) => {
  return (
    <nav {...props}>
      <ShopActionsMenu />
    </nav>
  );
};

export default ShopNavigation;
