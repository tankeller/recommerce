import React from 'react';
import { Global } from '@emotion/core';

const GlobalStyle = () => {
  return (
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans","Helvetica Neue", sans-serif',
        },
        'h1,h2,h3,h4,h5': {
          fontFamily:
            '"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Droid Sans","Helvetica Neue", sans-serif',
        },
      }}
    />
  );
};

export default GlobalStyle;
