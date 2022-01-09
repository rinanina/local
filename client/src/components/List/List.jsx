import React, { useMemo }  from 'react';

import { Loading, Empty } from 'components';

import { Wrapper, Items, Item, Image, Title } from './styled';

const List = ({ loading, data }) => {
  const memoizedContent = useMemo(() => {
    if (loading) return <Loading />;

    if (!loading && !data?.length) return <Empty />;

    return (
      <Items>
        {data.map((item) => (
          <Item key={item._id}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
          </Item>
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
