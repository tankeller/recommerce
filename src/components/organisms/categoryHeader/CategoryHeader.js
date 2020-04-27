/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import CategoryHeadline from '../../atoms/categoryHeadline/CategoryHeadline';

const CategoryHeader = ({ categoryName, ...props }) => {
  return (
    <div
      css={{
        display: 'block',
        backgroundColor: '#eee',
        height: '150px',
        marginBottom: '10px',
        padding: '1.5rem calc((100vw - 1400px) / 2)',
      }}
      {...props}
    >
      <CategoryHeadline>{categoryName}</CategoryHeadline>
    </div>
  );
};

CategoryHeader.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryHeader;
