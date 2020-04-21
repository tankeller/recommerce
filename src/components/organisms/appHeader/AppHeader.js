/** @jsx jsx */
import { jsx } from '@emotion/core';

import MainHeaderNavigation from '../mainNavigation/MainHeaderNavigation';

import categories from '../../../assets/static/categories.json';

const AppHeader = () => {
  return (
    <header
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.5rem calc((100vw - 1400px) / 2)',
        borderBottom: '1px solid #eee',
      }}
    >
      <MainHeaderNavigation categories={categories} />
    </header>
  );
};

export default AppHeader;
