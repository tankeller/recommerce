/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import CategoryHeadline from '../../atoms/categoryHeadline/CategoryHeadline';

const CategoryHeader = ({ categoryName, ...props }) => {
  return (
    <StyledCategoryHeader {...props}>
      <CategoryHeadline>{categoryName}</CategoryHeadline>
    </StyledCategoryHeader>
  );
};

CategoryHeader.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryHeader;

/**
 * Styling
 */
export const StyledCategoryHeader = styled.div`
  display: block;
  margin-bottom: 10px;
  padding: 20px 0;
`;
