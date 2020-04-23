/** @jsx jsx */
import { jsx } from '@emotion/core';

const AppFooter = ({ ...props }) => {
  return (
    <footer
      css={{
        width: '100%',
        minHeight: '100px',
        textAlign: 'center',
      }}
      {...props}
    >
      ©copyrights by Portaltech
    </footer>
  );
};

export default AppFooter;
