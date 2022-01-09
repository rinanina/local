import React, { useEffect, useState }  from 'react';

import { List } from 'components';
import main from 'assets/main.png';

const mockedPost1 = {
  title: 'Some loong post title about some artist and some story happened to him',
  image: main,
};

const mockedPost2 = {
  title: 'Some loong post title about some artist',
  image: main,
};

const mockedPost3 = {
  title: 'Some loong post title about some artist',
  image: main,
};

const mockedPost4 = {
  title: 'Some loong post title about some artist and some story happened to him',
  image: main,
};

const mockedPosts = [mockedPost1, mockedPost2, mockedPost3, mockedPost4];

const Posts = () => {
  // const { loading, response, error, clearError, doFetch } = useFetch();
  const [data, setData] = useState();

  useEffect(() => {
    setData(mockedPosts);
  }, []);

  // useEffect(() => {
  //   doFetch((api) => api.posts.loadAll());
  // }, []);
  //
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     clearError();
  //   }
  //
  //   if (response) {
  //     setData(response.data);
  //   }
  // }, [error, response]);

  console.log('data', data);

  return (
    <List data={data} loading={false} />
  );
};

export default Posts;
