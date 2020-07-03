/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Img from '../../atoms//img/Img';
import ImgPlaceholder from '../../atoms/imgPlaceholder/ImgPlaceholder';

const ArticleMedia = ({ article }) => {
  return (
    <Container>
      {article.img ? <Img src={article.img}></Img> : <ImgPlaceholder />}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  width: 50%;
`;

export default ArticleMedia;
