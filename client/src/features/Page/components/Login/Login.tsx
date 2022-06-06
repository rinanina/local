import React, { FC } from 'react';

import LoginForm from 'features/LoginForm/components';

import PageWrapper from '../PageWrapper';

const Login: FC = () => (
  <PageWrapper>
    <LoginForm />
  </PageWrapper>
);

export default Login;
