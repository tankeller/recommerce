/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';

const MainHeaderNavigation = ({ className, categories, restProps }) => {
  return (
    <div
      css={{
        width: '100%',
        margin: '0 auto',
      }}
      className={className}
      {...restProps}
    >
      <ul
        css={{
          display: 'flex',
        }}
      >
        {categories.map((category) => {
          return (
            <li
              css={{
                padding: '4px 8px',
                borderBottom: category.active ? '2px' : '',
                borderBottomColor: category.active ? 'darkgreen' : '',
                borderBottomStyle: category.active ? 'solid' : '',
                listStyle: 'none',
              }}
            >
              <Link
                css={{
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  color: 'darkgray',
                  '&:hover': {
                    color: 'darkgreen',
                  },
                }}
                key={category.id}
                to={`category/${category.id}`}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainHeaderNavigation;
