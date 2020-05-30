/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import theme from '../../../assets/theme';

const SectionWrapper = ({
  fullWidth,
  paddingX,
  paddingY,
  children,
  ...props
}) => {
  return (
    <StyledSectionWrapper
      fullWidth={fullWidth}
      paddingX={paddingX}
      paddingY={paddingY}
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
  padding: ${(props) => `${props.paddingY}px ${props.paddingX}px`};
  ${({ fullWidth }) =>
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
