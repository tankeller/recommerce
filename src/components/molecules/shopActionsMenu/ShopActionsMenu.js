import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { Link } from '@reach/router';

import Icon from '../../atoms/icon/Icon';

const ShopActionsMenu = ({ props }) => {
  const theme = useTheme();

  return (
    <ActionsContianer {...props}>
      <ActionButton to="/search" theme={theme}>
        <Icon name="search" />
      </ActionButton>
      <ActionButton to="/register" theme={theme}>
        <Icon name="user" />
      </ActionButton>
      <ActionButton to="/register" theme={theme}>
        <Icon name="heart" />
      </ActionButton>
      <ActionButton to="/checkout" theme={theme}>
        <Icon name="shopping-cart" />
      </ActionButton>
    </ActionsContianer>
  );
};

export const ActionsContianer = styled.div`
  display: flex;
  margin-left: 5px;
`;

export const ActionButton = styled(Link)`
  width: 50px;
  height: 50px;
  border: none;
  color: ${({ theme }) => (theme ? theme.colors.textColor : '#61DBFB')};
  padding: 0.8rem 1rem;
  font-size: 1rem;

  &:hover {
    color: ${(props) =>
      props.theme ? props.theme.colors.primaryColor : '#61DBFB'};
    background-color: #fff;
  }
`;

export default ShopActionsMenu;
