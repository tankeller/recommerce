/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const NavToggle = ({ open, onClick, ...props }) => {
  const theme = useTheme();

  return (
    <button
      aria-label={open ? 'open' : 'closed'}
      onClick={onClick}
      css={css`
        width: 50px;
        padding: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        span {
          display: block;
          height: 2px;
          width: 100%;
          margin-top: 4px;
          background-color: ${theme.colors.textColor};
          border-radius: 1px;
          transition: 'all .25s';
        }

        &[aria-label='open'] {
          span {
            display: block;
            height: 2px;
            width: 100%;
            margin-top: 4px;
            border-radius: 1px;
            transition: 'all .25s';

            &:first-of-type {
              transform: rotate(45deg) translate(4.4px, 4.4px);
            }

            &:nth-of-type(2) {
              width: 0%;
              opacity: 0;
            }

            &:last-of-type {
              transform: rotate(-45deg) translate(4.4px, -4.4px);
            }
          }
        }
      `}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

NavToggle.defaultProps = {
  open: false,
  onClick: PropTypes.func,
};

NavToggle.propTypes = {
  open: PropTypes.bool,
  onClick: () => {},
};

export default NavToggle;
