/** @jsx jsx */
import { jsx } from '@emotion/core';

import MainHeaderNavigation from '../mainHeaderNavigation/MainHeaderNavigation';
import ShopNavigation from '../shopNavigation/shopNavigation';

import categories from '../../../assets/static/categories.json';

const AppHeader = ({ ...props }) => {
  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 calc((100vw - 1400px) / 2)',
        borderBottom: '1px solid #eee',
      }}
      {...props}
    >
      <ShopNavigation />
      <MainHeaderNavigation categories={categories} />
    </header>
  );
};

export default AppHeader;
