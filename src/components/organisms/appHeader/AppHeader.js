/** @jsx jsx */
import { jsx } from '@emotion/core';

import MainHeaderNavigation from '../mainNavigation/MainHeaderNavigation';

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
      <MainHeaderNavigation />
    </header>
  );
};

export default AppHeader;
