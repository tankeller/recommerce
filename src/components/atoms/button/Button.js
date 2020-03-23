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

const ButtonType = {
    BUTTON: 'button',
    SUBMIT: 'submit',
    RESET: 'reset'
}

const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}

Button.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    size: ButtonSize.MEDIUM,
    onClick: () => {},
    className: '',
    disabled: false
}

export default Button;
