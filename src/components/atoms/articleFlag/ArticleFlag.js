/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const ArticleFlag = ({ className, children, restProps }) => {
  return (
    <div
      css={{
        width: '50px',
        height: '50px',
        zIndex: '100',
        display: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: 'gray',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '50px',
      }}
      className={`${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

ArticleFlag.defaultProps = {
  className: '',
};

ArticleFlag.propTypes = {
  className: PropTypes.string,
};

export default ArticleFlag;
