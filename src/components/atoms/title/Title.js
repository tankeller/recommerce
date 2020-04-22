/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const Title = ({ truncateAfter, children, ...props }) => {
  if (children.length >= truncateAfter) {
    children = children.substring(0, truncateAfter) + '...';
  }

  return (
    <p
      css={{
        fontSize: '1rem',
        color: '#4f4f4f',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
      {...props}
    >
      {children}
    </p>
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
