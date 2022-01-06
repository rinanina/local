import React from 'react';

import { useAuth } from 'context/AuthContext';

import PageWrapper from '../PageWrapper';

const Home = () => {
  const { isAuth } = useAuth();

  return (
    <PageWrapper>
      <span>Home</span>
      {isAuth && <span>Admin here</span>}
    </PageWrapper>
  );
};

export default Home;
