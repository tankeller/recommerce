/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import NavListElement from '../../atoms/navListElement/NavListElement';
import NavLink from '../../atoms/navLink/NavLink';
import Icon from '../../atoms/icon/Icon';

const MainHeaderNavigation = ({ showHomeLink, categories, ...restProps }) => {
  return (
    <nav
      css={{
        width: '100%',
        margin: '0 auto',
      }}
      {...restProps}
    >
      <ul
        css={{
          display: 'flex',
        }}
      >
        {showHomeLink ? (
          <NavListElement>
            <NavLink to="/">
              <Icon name="home" />
            </NavLink>
          </NavListElement>
        ) : null}
        {categories.map((category) => {
          return (
            <NavListElement
              key={category.id}
              isActive={category.active ? true : false}
            >
              <NavLink to={`category/${category.id}`}>{category.name}</NavLink>
            </NavListElement>
          );
        })}
      </ul>
    </nav>
  );
};

MainHeaderNavigation.defaultProps = {
  showHomeLink: true,
  categories: [],
};

MainHeaderNavigation.porpTypes = {
  showHomeLink: PropTypes.bool,
  categories: PropTypes.array,
};

export default MainHeaderNavigation;
