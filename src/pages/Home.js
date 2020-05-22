/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import Ul from '../components/atoms/ul/Ul';
import List from '../components/molecules/list/List';
import NavListElement from '../components/atoms/navListElement/NavListElement';
import ImagePlaceholder from '../components/atoms/imagePlaceholder/ImagePlaceholder';

import Days from '../assets/static/dummy/demoList.json';

const Home = ({ props }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        fontSize: theme.font.sizes.small,
      }}
      {...props}
    >
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
      <List direction="vertical" items={Days} />
      <ImagePlaceholder width="200" height="200" />
    </div>
  );
};

export default Home;

/**
 * Styling
 */
export const StyledHeading = styled.h3`
  color: red;
`;
