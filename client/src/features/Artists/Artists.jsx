import React, { useEffect, useState }  from 'react';

import { List } from 'components';
import main from 'assets/main.png';

const mockedArtist = {
  title: 'Artist Name',
  image: main,
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

  console.log('data', data);

  return (
    <List data={data} loading={false} />
  );
};

export default Artists;
