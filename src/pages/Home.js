/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import theme from '../assets/theme';

import SectionWrapper from '../components/atoms/sectionWrapper/SectionWrapper';
import Ul from '../components/atoms/ul/Ul';
import List from '../components/molecules/list/List';
import NavListElement from '../components/atoms/navListElement/NavListElement';
import ImagePlaceholder from '../components/atoms/imgPlaceholder/ImgPlaceholder';
import Img from '../components/atoms/img/Img';
import DEFAULT_IMAGE_URL from '../assets/static/logo.png';

import Days from '../assets/static/dummy/demoList.json';

const Home = ({ props }) => {
  return (
    <SectionWrapper>
      <h3>Liste - vertical (default)</h3>
      <Ul>
        <NavListElement>test 1</NavListElement>
        <NavListElement>test 2</NavListElement>
        <NavListElement>test 3</NavListElement>
      </Ul>
      <h3>Liste - horizontal</h3>
      <Ul direction="horizontal">
        <NavListElement>test 1</NavListElement>
        <NavListElement>test 2</NavListElement>
        <NavListElement>test 3</NavListElement>
      </Ul>

      <StyledHeading>Liste</StyledHeading>
      <List items={Days} />

      <StyledHeading>Image Placeholder</StyledHeading>
      <ImagePlaceholder width={200} height={200} />
      <Img
        src="https://fakeimg.pl/250x250/f5f5f5/999/?font=bebas&font_size=32&text=Coffee"
        srcOnError={DEFAULT_IMAGE_URL}
      />
    </SectionWrapper>
  );
};

export default Home;

/**
 * Styling
 */
export const StyledHeading = styled.h3`
  color: ${theme.colors.primaryColor};
  margin-bottom: 10px;
`;
