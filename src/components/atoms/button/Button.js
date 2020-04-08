import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ type, size, onClick, className, disabled, children }) => {
    return (
        <button
            className={`${className} btn btn-${size}`}
            onClick={onClick}
            disabled={disabled ? true : false}
            type={type}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    size: PropTypes.oneOf('small', 'medium', 'large'),
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: 'button',
    size: 'medium',
    onClick: () => {},
    className: '',
    disabled: false
}

export default Button;
