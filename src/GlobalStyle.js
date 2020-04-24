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
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        code: {
          fontFamily:
            'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
        },
      }}
    />
  );
};

export default GlobalStyle;
