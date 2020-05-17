import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

const Button = ({ type, size, onClick, disabled, children, ...props }) => {
  const theme = useTheme();

  return (
    <StyledButton
      theme={theme}
      onClick={onClick}
      disabled={disabled ? true : false}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const handleButtonSize = (size) => {
  switch (size) {
    case 'small':
      return 'padding: 0.5rem 0.6rem; font-size: 0.7rem';
    case 'medium':
      return 'padding:0.8rem 1rem; font-size: 1rem';
    case 'large':
      return 'padding: 1.2rem 1.4rem; font-size: 1.33rem';
    default:
      return 'padding:0.5rem 0.6rem; font-size: 0.7rem';
  }
};

export const StyledButton = styled.button`
  background-color: #fff;
  color: ${(props) => (props.theme ? props.theme.colors.textColor : '#61DBFB')};
  font-weight: bold;
  border-radius: 2px;
  border: none;
  text-transform: uppercase;
  fontsize: 0.7rem;
  cursor: pointer;

  ${({ size }) => {
    handleButtonSize(size);
  }}

  &:hover {
    color: ${(props) =>
      props.theme ? props.theme.colors.primaryColor : '#61DBFB'};
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

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
