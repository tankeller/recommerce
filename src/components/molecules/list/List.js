/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Ul from '../../atoms/ul/Ul';
import NavListElement from '../../atoms/navListElement/NavListElement';

const List = ({ direction, items, ...props }) => {
  return (
    <StyledList direction={direction} {...props}>
      {items.map((item) => {
        return <NavListElement key={item.id}>{item.value}</NavListElement>;
      })}
    </StyledList>
  );
};

List.defaultProps = {
  direction: 'vertical',
  items: [
    {
      id: 1,
      value: 'List item 1',
    },
    {
      id: 2,
      value: 'List item 2',
    },
    {
      id: 3,
      value: 'List item 3',
    },
    {
      id: 4,
      value: 'List item 4',
    },
  ],
};

List.propTypes = {
  direction: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ),
};

export default List;

/**
 * Styling
 */
export const StyledList = styled(Ul)`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'column' : ''};

  /* Spacing starting from the 2nd element */
  li + li {
  }
`;
