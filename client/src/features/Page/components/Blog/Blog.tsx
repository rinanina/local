import React, { FC } from 'react';

import Posts from 'features/Posts';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components';

import PageWrapper from '../PageWrapper';

const Blog: FC = () => {
  const { isAuth } = useAuth();

  const handleCreateClick = () => {
    console.log('Create post');
  };

  return (
    <PageWrapper title='Blog' renderButton={() => (isAuth ? <Button text='Add new post' onClick={handleCreateClick} /> : null)}>
      <Posts />
    </PageWrapper>
  );
};

export default Blog;
