import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from'react-router-dom';
import { toast } from 'react-toast';

import { useAuth } from 'context/AuthContext';
import useFetch from 'hooks/useFetch';
import { Loading, Empty } from 'components';
import { PageTitle } from 'features/Page';
import zine1 from 'assets/zine1.png';

import StickerBookForm from '../StickerBookForm';

const mockedSlide1 = {
  description: 'Slide description some looooong text, Slide description some looooong text, Slide description some looooong text',
  linkToPage: 'someLink',
  artistName: 'Artist Name',
  image: zine1,
};

const mockedSlides = [mockedSlide1, mockedSlide1, mockedSlide1];

const Stickerbook = () => {
  const { isAuth } = useAuth();
  const { id } = useParams();
  // TODO; fix type
  const { loading, response, error, clearError, doFetch } = useFetch<any>();
  const [data, setData] = useState();

  useEffect(() => {
    // @ts-ignore
    doFetch((api) => api.stickerbooks.loadOne(id));
  }, [id]);

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

  const memoizedContent = useMemo(() => {
    if (loading) return <Loading />;

    if (!loading && !data) return <Empty />;

    if (isAuth) {
      return (
        <>
          <PageTitle title='Edit stickerbook' />
          <StickerBookForm data={{
            // @ts-ignore
            ...data,
            slides: mockedSlides,
          }}/>
        </>
      );
    }

    return (
      <>
        {data && <PageTitle title={(data as any).title}/>}
        <div>regular user content</div>
      </>
    );
  }, [loading, isAuth, data]);

  return <div>{memoizedContent}</div>;
};

export default Stickerbook;
