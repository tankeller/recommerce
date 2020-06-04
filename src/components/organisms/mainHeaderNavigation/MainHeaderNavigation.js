/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import useWindowSize from '../../../assets/hooks/useWindowSize';

import Navigation from '../../molecules/navigation/Navigation';
import NavListElement from '../../atoms/navListElement/NavListElement';
import NavLink from '../../atoms/navLink/NavLink';
import NavToggle from '../../atoms/navToggle/NavToggle';
import Icon from '../../atoms/icon/Icon';

const MainHeaderNavigation = ({ showHomeLink, categories, ...props }) => {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const offCanvas = windowSize.width < theme.breakpoint.num.l;
  const [open, setOpen] = useState(false);
  const isHidden = !offCanvas || open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  /**
   * Actions
   */
  const closeMenu = () => {
    if (open || (!offCanvas && open)) {
      setOpen(!open);
    }
  };

  const autoCloseMenu = () => {
    if (open && !offCanvas) {
      setOpen(!open);
    }
  };
  autoCloseMenu();

  /**
   * Component
   */
  return (
    <MainNav {...props}>
      <Navigation
        open={open}
        setOpen={setOpen}
        offCanvas={offCanvas}
        aria-hidden={!isHidden}
      >
        {showHomeLink && (
          <NavListElement>
            <NavLink to="/" onClick={closeMenu} tabIndex={tabIndex}>
              {offCanvas ? 'Home' : <Icon name="home" />}
            </NavLink>
          </NavListElement>
        )}
        {categories.map((category) => {
          return (
            <NavListElement
              key={category.id}
              isActive={category.active ? true : false}
            >
              <NavLink
                to={`category/${category.id}`}
                onClick={closeMenu}
                tabIndex={tabIndex}
              >
                {category.name}
              </NavLink>
            </NavListElement>
          );
        })}
      </Navigation>
      {offCanvas && <NavToggle open={open} setOpen={setOpen} />}
      {offCanvas && <Overlay open={open} onClick={closeMenu} />}
    </MainNav>
  );
};

MainHeaderNavigation.defaultProps = {
  showHomeLink: false,
  categories: [],
};

MainHeaderNavigation.porpTypes = {
  showHomeLink: PropTypes.bool,
  categories: PropTypes.array,
};

export default MainHeaderNavigation;

/**
 * Styling
 */
export const MainNav = styled.nav`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 50px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1001;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.open &&
    css`
      width: 100%;
      opacity: 1;
      z-index: 1001;
    `}
`;
