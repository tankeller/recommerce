/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ImagePlaceholder = ({
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
  const src = `https://fakeimg.pl/${width}x${height}/${colorBg}/${colorText}/?font=${font}&font_size=${fontSize}&text=${imageText}`;
  const srcRetina = `${src}&retina=1`;
  const srcSet = `${src} 1x, ${srcRetina} 2x`;

  return <StyledImagePlaceholder src={src} srcSet={srcSet} alt={alt} />;
};

ImagePlaceholder.defaultProps = {
  width: 300,
  height: 300,
  colorBg: 'f5f5f5',
  colorText: '999999',
  imageText: 'Dummy',
  font: 'bebas',
  fontSize: 24,
  alt: 'Placeholder',
};

ImagePlaceholder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorBg: PropTypes.string,
  colorText: PropTypes.string,
  imageText: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.number,
  alt: PropTypes.string,
};

export default ImagePlaceholder;

/**
 * Styling
 */
export const StyledImagePlaceholder = styled.img``;
