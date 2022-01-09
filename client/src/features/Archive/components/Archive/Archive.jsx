import React, { useEffect, useState }  from 'react';
import { toast } from 'react-toast';

import useFetch from 'hooks/useFetch';
import { List } from 'components';
import { Page } from 'features/Page';
import zine1 from 'assets/zine1.PNG';
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
const getDataWithMockedSlides = (data) => data?.map((item, index) => {
  const mockedSlides = (((index + 1) % 2) !== 0) ? mockedSlides1 : mockedSlides2;
  return ({...item, slides: mockedSlides, image: mockedSlides[0].image});
});

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
    <List data={getDataWithMockedSlides(data)} loading={loading} page={Page.ARCHIVE} />
  );
};

export default Archive;
