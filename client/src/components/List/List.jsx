import React, { useMemo }  from 'react';
import { Link } from 'react-router-dom';

import { Loading, Empty } from 'components';

import { Wrapper, Items, Item, Image, Title } from './styled';

const List = ({ loading, data, page }) => {
  const memoizedContent = useMemo(() => {
    if (loading) return <Loading />;

    if (!loading && !data?.length) return <Empty />;

    return (
      <Items>
        {data.map((item) => (
          <Link key={item._id} to={`${page}/${item._id}`}>
            <Item>
              <Image src={item.image} alt={item.title} />
              <Title>{item.title}</Title>
            </Item>
          </Link>
        ))}
      </Items>
    );
  }, [loading, data]);

  return (
    <Wrapper>
      {memoizedContent}
    </Wrapper>
  );
};

export default List;
