/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const Breadcrumb = ({ category, ...props }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        color: theme.colors.textColor,
        fontSize: theme.font.sizes.small,
      }}
      {...props}
    >
      <Link
        css={{
          textDecoration: 'none',
        }}
        to="/"
      >
        Shop
      </Link>{' '}
      / <span css={{ color: theme.colors.primaryColor }}>{category.name}</span>
    </div>
  );
};

Breadcrumb.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Breadcrumb;
