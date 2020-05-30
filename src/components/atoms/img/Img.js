/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import imgFallback from '../../../assets/static/fallback.png';

const Img = ({ src, srcOnError, width, height, alt, ...props }) => {
  const [srcImg, setSrcImg] = useState(null);

  const onError = () => {
    setSrcImg(srcOnError);
  };

  /**
   * Fallback 2:
   * INFO: The original image can't be loaded and the custom "srcOnError" prop is not set or can't be loaded too. The broken image is replaced by the last given fallback from the static folder.
   */
  if (!srcOnError) {
    src = imgFallback;
  }

  /**
   * Fallback 1
   * The original image can't be loaded and the custom "srcOnError" prop at the <Img> component is used instead.
   */
  if (srcImg) {
    src = srcImg;
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
