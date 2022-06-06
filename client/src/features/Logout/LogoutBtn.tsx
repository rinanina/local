import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';
import { useAuth } from 'context/AuthContext';

import { Page } from '../Page';

const LogoutBtn = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutHandler = (event: ChangeEvent) => {
    event.preventDefault();

    auth.logout && auth.logout();
    navigate(Page.LOGIN);
  };

  return (
    <Button text='Logout' onClick={logoutHandler} />
  );
};

export default LogoutBtn;
