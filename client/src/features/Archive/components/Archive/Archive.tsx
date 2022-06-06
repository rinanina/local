import React, { useEffect, useState }  from 'react';
import { toast } from 'react-toast';

import useFetch from 'hooks/useFetch';
import { List } from 'components';
import { Page } from 'features/Page';
import zine1 from 'assets/zine1.png';
import zine2 from 'assets/zine2.jpg';

const mockedSlide1 = {
  description: 'Slide description some looooong text, Slide description some looooong text, Slide description some looooong text',
  linkToPage: 'someLink',
  artistName: 'Artist Name',
  image: zine1,
};

const mockedSlide2 = {
  description: 'Slide description some looooong text, Slide description some looooong text, Slide description some looooong text',
  linkToPage: 'someLink',
  artistName: 'Artist Name',
  image: zine2,
};

const mockedSlides1 = [mockedSlide1, mockedSlide1, mockedSlide1];

const mockedSlides2 = [mockedSlide2, mockedSlide2, mockedSlide2];

// TODO: set image as first slides image on be
const getDataWithMockedSlides = (data: any) => data?.map((item: any, index: any) => {
  const mockedSlides = (((index + 1) % 2) !== 0) ? mockedSlides1 : mockedSlides2;
  return ({...item, slides: mockedSlides, image: mockedSlides[0].image});
});

const Archive = () => {
  // TODO: set correct type
  const { loading, response, error, clearError, doFetch } = useFetch<any>();
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

  return (
    <List data={getDataWithMockedSlides(data)} loading={loading} page={Page.ARCHIVE} />
  );
};

export default Archive;
