import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ truncateAfter, className, children }) => {
    
    if (children.length >= truncateAfter) {
        children = children.substring(0, truncateAfter) + '...';
    }

    return (
        <p className={`${className} article-title`}>{children}</p>
    )
}

Title.defaultProps = {
    className: '',
    truncateAfter: 120,
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
    truncateAfter: PropTypes.number,
    className: PropTypes.string
};

export default Title;