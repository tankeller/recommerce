/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Theme from '../../../assets/theme';

const Title = ({ truncateAfter, children, ...props }) => {
  if (children.length >= truncateAfter) {
    children = children.substring(0, truncateAfter) + '...';
  }

  return <StyledTitle {...props}>{children}</StyledTitle>;
};

Title.defaultProps = {
  className: '',
  truncateAfter: 120,
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  truncateAfter: PropTypes.number,
  className: PropTypes.string,
};

export default Title;

/**
 * Styling
 */
export const StyledTitle = styled.p`
  font-size: 1rem;
  color: ${Theme.colors.textColor};
`;
