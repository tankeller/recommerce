/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const CategoryHeadline = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <h2
      css={{
        color: theme.colors.primaryColor,
        textTransform: 'uppercase',
        fontSize: '30px',
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

CategoryHeadline.propTypes = {
  chidlren: PropTypes.any.isRequired,
};

export default CategoryHeadline;
