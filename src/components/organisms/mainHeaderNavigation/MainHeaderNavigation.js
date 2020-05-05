/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from '../../../assets/hooks/useWindowSize';

import NavListElement from '../../atoms/navListElement/NavListElement';
import NavLink from '../../atoms/navLink/NavLink';
import NavToggle from '../../atoms/navToggle/NavToggle';
import Icon from '../../atoms/icon/Icon';

const MainHeaderNavigation = ({ showHomeLink, categories, ...restProps }) => {
  /**
   * Actions
   */
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToggleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    if (isOpenMenu) {
      setIsOpenMenu(!isOpenMenu);
    }
  };

  const windowSize = useWindowSize();
  const isMobileMenu = windowSize.width < 1024;

  /**
   * Styling
   */
  const MainNav = styled.nav`
    position: relative;
    width: 100%;
    margin: 0 auto;
    min-height: 50px;
  `;

  const MainNavList = styled.ul`
    display: flex;
    min-height: 50px;
    align-items: center;

    ${(props) =>
      props.offcanvas &&
      css`
        background: #fff;
        display: block;
        width: 100vw;
        max-width: 350px;
        height: 100vh;
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        z-index: 1100;
        transition: all 0.3s ease-in-out;
        transform: translateX(-100%);
      `}

    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}

      ${(props) =>
        props.autoClose &&
        css`
          transform: translateX(-100%);
        `}
  `;

  const MainNavToggle = styled(NavToggle)`
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;

    ${(props) =>
      props.open &&
      css`
        left: 300px;
        z-index: 1300;
      `}
  `;

  const Overlay = styled.div`
    position: fixed;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1001;
  `;

  return (
    <MainNav {...restProps}>
      <MainNavList offcanvas={isMobileMenu} open={isOpenMenu}>
        {showHomeLink && (
          <NavListElement>
            <NavLink to="/" onClick={closeMenu}>
              {isMobileMenu ? 'Home' : <Icon name="home" />}
            </NavLink>
          </NavListElement>
        )}
        {categories.map((category) => {
          return (
            <NavListElement
              key={category.id}
              isActive={category.active ? true : false}
            >
              <NavLink to={`category/${category.id}`} onClick={closeMenu}>
                {category.name}
              </NavLink>
            </NavListElement>
          );
        })}
      </MainNavList>
      {isMobileMenu && (
        <MainNavToggle open={isOpenMenu} onClick={handleToggleClick} />
      )}
      {isOpenMenu && <Overlay onClick={closeMenu} />}
    </MainNav>
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
