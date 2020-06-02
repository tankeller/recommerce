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
  border-bottom: 1px solid ${theme.colors.borderColor};
`;

export const StyledShopLogo = styled(Logo)`
  display: inline-block;
  height: 50px;
  padding: 5px 0;

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

  button {
    @media ${theme.screen.mobile}, ${theme.screen.tabletPortrait} {
      width: auto;
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

export const StyledMainHeaderNavigation = styled(MainHeaderNavigation)`
  float: left;
  width: auto;

  @media ${theme.screen.mobile}, ${theme.screen.tabletPortrait} {
    margin-left: -10px;
  }
`;
