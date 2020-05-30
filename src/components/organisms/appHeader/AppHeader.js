import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../assets/theme';

import SectionWrapper from '../../atoms/sectionWrapper/SectionWrapper';
import Logo from '../../atoms/logo/Logo';
import ShopNavigation from '../shopNavigation/ShopNavigation';
import MainHeaderNavigation from '../mainHeaderNavigation/MainHeaderNavigation';

import categories from '../../../assets/static/categories.json';

const AppHeader = ({ ...props }) => {
  return (
    <StyledHeader {...props}>
      <SectionWrapper>
        <StyledShopLogo />
        <StyledShopNavigation />
        <StyledMainHeaderNavigation categories={categories} />
      </SectionWrapper>
    </StyledHeader>
  );
};

export default AppHeader;

/**
 * Styling
 */
export const StyledHeader = styled.header`
  display: flex;
`;

export const StyledShopLogo = styled(Logo)`
  display: inline-block;
  height: 50px;

  @media ${theme.screen.mobile}, ${theme.screen.tabletPortrait} {
    margin-bottom: -10px; /* HACK: Fix inline-block spacing */
  }

  @media ${theme.screen.tabletLandscape}, ${theme.screen.desktop} {
    float: left;
    margin-right: 10px;
  }
`;

export const StyledShopNavigation = styled(ShopNavigation)`
  float: right;
`;

export const StyledMainHeaderNavigation = styled(MainHeaderNavigation)`
  float: left;
  width: auto;
`;
