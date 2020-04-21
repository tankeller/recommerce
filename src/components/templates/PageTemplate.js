/** @jsx jsx */
import { jsx } from '@emotion/core';

const PageTemplate = ({ children, ...props }) => {
  return (
    <main
      css={{
        display: 'block',
        margin: '2rem auto 2rem',
        maxWidth: '90vw',
        width: '1200px',
      }}
      {...props}
    >
      {children}
    </main>
  );
};

export default PageTemplate;
