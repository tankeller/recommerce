/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Ul = ({ direction, children, ...props }) => {
  return (
    <StyledUl direction={direction} {...props}>
      {children}
    </StyledUl>
  );
};

Ul.defaultProps = {
  direction: 'vertical',
};

Ul.propTypes = {
  direction: PropTypes.string,
};

export default Ul;

/**
 * Styling
 */
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'column' : ''};

  /* Spacing starting from the 2nd element */
  li + li {
  }
`;
