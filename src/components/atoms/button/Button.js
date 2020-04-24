/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const Button = ({ type, size, onClick, className, disabled, children }) => {
  return (
    <button
      css={{
        padding: '6px',
        backgroundColor: 'blue',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '2px',
        border: 'none',
        textTransform: 'uppercase',
        fontSize: '0.7rem',
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: 'red',
        },

        '&:disabled': {
          backgroundColor: 'gray',
          cursor: 'not-allowed',
        },
        '&.btn-small': {
          padding: '0.5rem 0.6rem',
        },
        '&.btn-medium': {
          padding: '0.8rem 1rem;',
          fontSize: '1rem',
        },
        '&.btn-large': {
          padding: '1.2rem 1.4rem',
          fontSize: '1.33rem',
        },
      }}
      className={`${className} btn btn-${size}`}
      onClick={onClick}
      disabled={disabled ? true : false}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
