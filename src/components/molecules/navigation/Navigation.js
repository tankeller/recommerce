/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const Navigation = ({ open, setOpen, offCanvas, children, ...props }) => {
  const theme = useTheme();

  return (
    <StyledNavigation
      offCanvas={offCanvas}
      open={open}
      setOpen={setOpen}
      theme={theme}
      {...props}
    >
      {children}
    </StyledNavigation>
  );
};

Navigation.defaultProps = {
  offCanvas: false,
};

Navigation.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  offCanvas: PropTypes.bool,
};

export default Navigation;

/**
 * Styling
 */
export const StyledNavigation = styled.ul`
  display: flex;
  min-height: 50px;
  align-items: center;

  ${({ offCanvas, theme }) =>
    offCanvas &&
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
      transition: all 0.3s linear;
      transform: translateX(-100%);

      @media ${theme.screen.mobilePortrait} {
      }
    `}

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}
`;
