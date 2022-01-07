import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from 'context/AuthContext';

import { Page } from '../Page';

const LogoutBtn = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutHandler = (event) => {
    event.preventDefault();

    auth.logout();
    navigate(Page.LOGIN);
  };

  return (
    <Wrapper onClick={logoutHandler}>Logout</Wrapper>
  );
};

export const Wrapper = styled.button`
  cursor: pointer;
  box-shadow: none;
`;

export default LogoutBtn;
