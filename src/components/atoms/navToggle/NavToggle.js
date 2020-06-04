/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const NavToggle = ({ open, setOpen, ...props }) => {
  const theme = useTheme();
  const isExpanded = open ? true : false;

  return (
    <Burger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      theme={theme}
      {...props}
    >
      <span />
      <span />
      <span />
    </Burger>
  );
};

NavToggle.defaultProps = {
  open: false,
  setOpen: PropTypes.func,
};

NavToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default NavToggle;

/**
 * Styling
 */
export const Burger = styled.button`
  width: 50px;
  padding: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  left: 0;
  transition: all 0.3s ease-in-out;

  ${({ open, theme }) =>
    open &&
    css`
      position: fixed;
      top: 0;
      left: 300px;
      z-index: 1300;

      /* OffCanvas max-width */
      @media only screen and (max-width: 350px) {
        left: calc(100% - 50px);
      }

      @media ${theme.screen.mobilePortrait} {
      }
    `}

  span {
    display: block;
    height: 2px;
    width: 100%;
    margin-top: 4px;
    background-color: ${({ theme }) => `${theme.colors.textColor}`};
    border-radius: 1px;
    transition: all 0.2s ease-in-out 0.3s;

    &:first-of-type {
      transform: ${({ open }) =>
        open
          ? 'rotate(45deg) translate(4.4px, 4.4px)'
          : 'rotate(0) translate(0)'};
    }

    &:nth-of-type(2) {
      width: ${({ open }) => (open ? '0%' : '')};
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:last-of-type {
      transform: ${({ open }) =>
        open
          ? 'rotate(-45deg) translate(4.4px, -4.4px)'
          : 'rotate(0) translate(0)'};
    }
  }
`;
