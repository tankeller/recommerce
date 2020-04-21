/** @jsx jsx */
import { jsx } from '@emotion/core';

import MainHeaderNavigation from '../mainNavigation/MainHeaderNavigation';

const AppHeader = () => {
  return (
    <header>
      <MainHeaderNavigation />
    </header>
  );
};

export default AppHeader;
