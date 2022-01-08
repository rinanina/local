import React, { useEffect, useState }  from 'react';
import { toast } from 'react-toast';

import main from 'assets/main.png';
import useFetch from 'hooks/useFetch';
import { Loading } from 'components';

import { Wrapper, Items, Item, Image, Title } from './styled';

const Archive = () => {
  const { loading, response, error, clearError, doFetch } = useFetch();
  const [data, setData] = useState();

  useEffect(() => {
    doFetch((api) => api.stickerbook.loadAll());
  }, []);


  useEffect(() => {
    if (error) {
      toast.error(error);
      clearError();
    }

    if (response) {
      setData(response.data);
    }
  }, [error, response]);

  console.log('data', data);

  return (
    <Wrapper>
      {loading && <Loading /> }
      {!data?.length ? <div>empty</div> : (
        <Items>
          {data.map((item) => (
            <Item key={item._id}>
              <Image src={main} alt={item.title} />
              <Title>{item.title}</Title>
            </Item>
          ))}
        </Items>
      )}
    </Wrapper>
  );
};

export default Archive;
