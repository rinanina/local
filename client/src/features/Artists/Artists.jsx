import React, { useEffect, useState }  from 'react';

import { List } from 'components';
import main from 'assets/main.png';
import { Page } from 'features/Page';

const mockedArtist = {
  title: 'Artist Name',
  image: main,
  _id: 278464756859859690,
};

const mockedArtists = [mockedArtist, mockedArtist, mockedArtist, mockedArtist, mockedArtist];

const Artists = () => {
  // const { loading, response, error, clearError, doFetch } = useFetch();
  const [data, setData] = useState();

  useEffect(() => {
    setData(mockedArtists);
  }, []);

  // useEffect(() => {
  //   doFetch((api) => api.artists.loadAll());
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
    <List data={data} loading={false} page={Page.ARTISTS} />
  );
};

export default Artists;
