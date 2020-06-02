/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const PageTemplate = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>;
};

export default PageTemplate;

/**
 * Styling
 */
export const StyledMain = styled.main`
  display: block;
  margin-bottom: 30px;
`;
