import React, { useEffect, useState, FC }  from 'react';

import { List } from 'components';
import main from 'assets/main.png';
import { Page } from 'features/Page';

const mockedPost1 = {
  title: 'Some loong post title about some artist and some story happened to him',
  image: main,
  _id: 27846475685985969084848,
};

const mockedPost2 = {
  title: 'Some loong post title about some artist',
  image: main,
  _id: 278464756859859690848484,
};

const mockedPost3 = {
  title: 'Some loong post title about some artist',
  image: main,
  _id: 2784647568598596908484843,
};

const mockedPost4 = {
  title: 'Some loong post title about some artist and some story happened to him',
  image: main,
  _id: 2784647568598596908484834,
};

const mockedPosts = [mockedPost1, mockedPost2, mockedPost3, mockedPost4];

const Posts: FC = () => {
  // const { loading, response, error, clearError, doFetch } = useFetch();
  const [data, setData] = useState<any>();

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

  return (
    <List data={data} loading={false} page={Page.BLOG} />
  );
};

export default Posts;
