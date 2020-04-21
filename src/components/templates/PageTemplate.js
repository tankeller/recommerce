/** @jsx jsx */
import { jsx } from '@emotion/core';

const PageTemplate = ({ children }) => {
  return (
    <main
      css={{
        display: 'block',
        margin: '0 auto',
        padding: '10px 10px',
      }}
    >
      {children}
    </main>
  );
};

export default PageTemplate;
