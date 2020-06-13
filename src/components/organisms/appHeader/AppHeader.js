/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import useDataFetching from '../../../assets/hooks/useDataFetching';

import SectionWrapper from '../../atoms/sectionWrapper/SectionWrapper';
import Logo from '../../atoms/logo/Logo';
import ShopNavigation from '../shopNavigation/ShopNavigation';
import MainHeaderNavigation from '../mainHeaderNavigation/MainHeaderNavigation';

import mockCategories from '../../../assets/static/categories.json';

const AppHeader = ({ ...props }) => {
  const theme = useTheme();
  let categories = [];

  const { loading, results, error } = useDataFetching(
    '/store-api/v1/navigation/main-navigation/main-navigation',
    {
      includes: {
        category: ['id', 'name', 'children', 'childCount'],
      },
      buildTree: true,
      depth: 3,
    }
  );

  if (loading || error) {
    return loading ? null : (categories = mockCategories);
  }

  categories = results;

  return (
    <StyledHeader theme={theme} {...props}>
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
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.borderColor}`};
`;

export const StyledShopLogo = styled(Logo)`
  display: inline-block;
  height: 50px;
  padding: 5px 0;

  ${({ theme }) => css`
    @media ${theme.screen.mobile}, ${theme.screen.tabletPortrait} {
      margin-bottom: -10px; /* HACK: Fix inline-block spacing */
    }

    @media ${theme.screen.tabletLandscape}, ${theme.screen.desktop} {
      float: left;
      margin-right: 10px;
    }
  `}
`;

export const StyledShopNavigation = styled(ShopNavigation)`
  float: right;

  button {
    ${({ theme }) => css`
      @media ${theme.screen.mobile}, ${theme.screen.tabletPortrait} {
        width: auto;
        padding-left: 12px;
        padding-right: 12px;
      }
    `}
  }
`;

export const StyledMainHeaderNavigation = styled(MainHeaderNavigation)`
  float: left;
  width: auto;

  ${({ theme }) => css`
    @media ${theme.screen.mobile}, ${theme.screen.tabletPortrait} {
      margin-left: -10px;
    }
  `}
`;
