/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import imgFallback from '../../../assets/static/fallback.png';
import imgFallbackRetina from '../../../assets/static/fallback@2x.png';

const ImgPlaceholder = ({
  width,
  height,
  colorBg,
  colorText,
  imageText,
  font,
  fontSize,
  alt,
  ...props
}) => {
  let src = `https://fakeimg.pl/${width}x${height}/${colorBg}/${colorText}/?font=${font}&font_size=${fontSize}&text=${imageText}`;
  let srcRetina = `${src}&retina=1`;

  const [srcImg, setSrcImg] = useState(null);

  const onError = () => {
    setSrcImg(imgFallback);
  };

  /**
   * Fallback:
   * The original image can't be loaded and will replaced by the fallback from the static folder.
   */
  if (srcImg) {
    src = srcImg;
    srcRetina = imgFallbackRetina;
  }

  const srcSet = `${src} 1x, ${srcRetina} 2x`;

  return (
    <StyledImgPlaceholder
      src={src}
      srcSet={srcSet}
      onError={onError}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
};

ImgPlaceholder.defaultProps = {
  width: 300,
  height: 300,
  colorBg: 'f5f5f5',
  colorText: '999999',
  imageText: 'Dummy',
  font: 'bebas',
  fontSize: 24,
  alt: 'Placeholder',
};

ImgPlaceholder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorBg: PropTypes.string,
  colorText: PropTypes.string,
  imageText: PropTypes.string,
  font: PropTypes.oneOf(['bebas', 'lobster', 'museo']),
  fontSize: PropTypes.number,
  alt: PropTypes.string,
};

export default ImgPlaceholder;

/**
 * Styling
 */
export const StyledImgPlaceholder = styled.img``;
