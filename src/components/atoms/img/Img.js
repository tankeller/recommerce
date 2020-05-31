/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import FALLBACK_IMAGE_URL from '../../../assets/static/fallback.png';

const Img = ({ src, srcOnError, width, height, alt, ...props }) => {
  const [srcFallback, setSrcFallback] = useState(null);

  const onError = () => {
    console.log('01');

    if (srcOnError) {
      /**
       * Fallback 1:
       * The original image can't be loaded and the custom "srcOnError" prop at the <Img> component is used instead.
       */
      setSrcFallback(srcOnError);
    } else {
      /**
       * Fallback 2:
       * INFO: The original image can't be loaded and the custom "srcOnError" prop is not set or can't be loaded too. The broken image is replaced by the last given fallback from the static folder.
       */
      setSrcFallback(FALLBACK_IMAGE_URL);
    }
  };

  if (srcFallback) {
    src = srcFallback;
  }

  /**
   * Original image
   */
  return (
    <img
      src={src}
      onError={onError}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  srcOnError: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default Img;

/**
 * Styling
 */
export const StyledImg = styled.img``;
