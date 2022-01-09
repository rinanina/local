import React, { useEffect, useState }  from 'react';
import { toast } from 'react-toast';

import useFetch from 'hooks/useFetch';
import { List } from 'components';
import main from 'assets/main.png';

const mockedSlide = {
  description: 'Slide description some looooong text, Slide description some looooong text, Slide description some looooong text',
  linkToPage: 'someLink',
  artistName: 'Artist Name',
  image: main,
};

const mockedSlides = [mockedSlide, mockedSlide, mockedSlide];

// TODO: set image as first slides image on be
const getDataWithMockedSlides = (data) => data?.map((item) => ({...item, slides: mockedSlides, image: mockedSlides[0].image}));

const Archive = () => {
  const { loading, response, error, clearError, doFetch } = useFetch();
  const [data, setData] = useState();

  useEffect(() => {
    doFetch((api) => api.stickerbooks.loadAll());
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

  console.log('data', getDataWithMockedSlides(data));

  return (
    <List data={getDataWithMockedSlides(data)} loading={loading} />
  );
};

export default Archive;
