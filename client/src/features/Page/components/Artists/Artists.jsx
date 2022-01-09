import React from 'react';

import Artists from 'features/Artists';
import { useAuth } from 'context/AuthContext';
import { Button } from 'components';

import PageWrapper from '../PageWrapper';

const ArtistsPage = () => {
  const { isAuth } = useAuth();

  const handleCreateClick = () => {
    console.log('Create artist');
  };

  return (
    <PageWrapper title='Artists' renderButton={() => (isAuth ? <Button text='Add new artist' onClick={handleCreateClick} /> : null)} >
      <Artists />
    </PageWrapper>
  );
};

export default ArtistsPage;
