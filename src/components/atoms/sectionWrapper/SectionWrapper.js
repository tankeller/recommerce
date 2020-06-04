/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

const SectionWrapper = ({
  fullWidth,
  paddingX,
  paddingY,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <StyledSectionWrapper
      fullWidth={fullWidth}
      paddingX={paddingX}
      paddingY={paddingY}
      theme={theme}
      {...props}
    >
      {children}
    </StyledSectionWrapper>
  );
};

SectionWrapper.defaultProps = {
  paddingX: 15,
  paddingY: 0,
};

SectionWrapper.propTypes = {
  fullWidth: PropTypes.bool,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  children: PropTypes.any.isRequired,
};

export default SectionWrapper;

/**
 * Styling
 */
export const StyledSectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};

  ${({ fullWidth, theme }) =>
    !fullWidth &&
    css`
      max-width: ${theme.pageMaxWidth};
    `}

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
