/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const SearchInput = ({ placeholder, className, ...restProps }) => {
  return (
    <input
      css={{
        height: '2.5rem',
        padding: '10px',
        width: '100%',
      }}
      placeholder={placeholder}
      className={className}
      type="search"
    />
  );
};

SearchInput.defaultProps = {
  placeholder: 'Search...',
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchInput;
