/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Home = ({ props }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        color: theme.colors.primaryColor,
      }}
      {...props}
    >
      This is Home
    </div>
  );
};

export default Home;
