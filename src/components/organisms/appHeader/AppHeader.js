import React from 'react';
import styled from '@emotion/styled';

import Logo from '../../atoms/logo/Logo';
import ShopNavigation from '../shopNavigation/ShopNavigation';
import MainHeaderNavigation from '../mainHeaderNavigation/MainHeaderNavigation';

import categories from '../../../assets/static/categories.json';

const AppHeader = ({ ...props }) => {
  return (
    <StyledHeader {...props}>
      <StyledShopLogo />
      <StyledShopNavigation />
      <StyledMainHeaderNavigation categories={categories} />
      <div>TEST</div>
    </StyledHeader>
  );
};

export default AppHeader;

/**
 * Styling
 */
export const StyledHeader = styled.header`
  display: block;

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const StyledShopLogo = styled(Logo)`
  display: inline-block;
  height: 50px;
`;

export const StyledShopNavigation = styled(ShopNavigation)`
  float: right;
`;

export const StyledMainHeaderNavigation = styled(MainHeaderNavigation)`
  float: left;
  width: auto;
`;
