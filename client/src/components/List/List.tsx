import React, { useMemo, FC }  from 'react';
import { Link } from 'react-router-dom';

import { Loading, Empty } from 'components';
import { Page } from 'features/Page';

import { Wrapper, Items, Item, Image, Title } from './styled';

type TProps = {
  loading: boolean;
  page: Page;
  // TODO; fix type
  data: any;
};

const List: FC<TProps> = ({ loading, data, page }) => {
  const memoizedContent = useMemo(() => {
    if (loading) return <Loading />;

    if (!loading && !data?.length) return <Empty />;

    return (
      <Items>
        {data.map((item: any) => (
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
