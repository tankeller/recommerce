/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const Title = ({ truncateAfter, children, ...props }) => {
  const theme = useTheme();

  if (children.length >= truncateAfter) {
    children = children.substring(0, truncateAfter) + '...';
  }

  return (
    <StyledTitle theme={theme} {...props}>
      {children}
    </StyledTitle>
  );
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
  color: ${({ theme }) => theme.colors.textColor};
`;
