import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';

const ShopActionsMenu = ({ props }) => {
  const theme = useTheme();

  return (
    <ActionsContianer {...props}>
      <ActionButton theme={theme}>
        <Icon name="search" />
      </ActionButton>
      <ActionButton theme={theme}>
        <Icon name="user" />
      </ActionButton>
      <ActionButton theme={theme}>
        <Icon name="heart" />
      </ActionButton>
      <ActionButton theme={theme}>
        <Icon name="shopping-cart" />
      </ActionButton>
    </ActionsContianer>
  );
};

export const ActionsContianer = styled.div`
  display: flex;
  margin-left: 5px;
`;

export const ActionButton = styled(Button)`
  width: 50px;
  height: 50px;
  border: none;

  &:hover {
    color: ${(props) =>
      props.theme ? props.theme.colors.primaryColor : '#61DBFB'};
    background-color: #fff;
  }
`;

export default ShopActionsMenu;
