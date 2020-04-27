/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const CategoryHeadline = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <h2
      css={{
        color: theme.colors.primaryColor,
        textTransform: 'uppercase',
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

export default CategoryHeadline;
