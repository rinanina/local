import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toast';
import { useNavigate } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import { Page } from 'features/Page';
import { useLanguage } from 'features/Language';

import { Wrapper, Form, Input, Button } from './styled';
import { LOCALE } from '../config/locale';

const LoginForm = () => {
  const { language } = useLanguage();
  const { loading, response, error, clearError, doFetch } = useFetch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (response) {
      setFormData({
        email: '',
        password: '',
      });

      // TODO: is not set for login because redirect unmount current component --> make toasters global
      toast.success(response.data.message);

      if (response.data.userId) {
        navigate(Page.ARCHIVE);
      }
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearError();
    }
  }, [error]);

  const handleRegister = async () => {
    await doFetch((api) => api.user.register({ ...formData }));
  };

  const handleLogin = async () => {
    await doFetch((api) => api.user.login({ ...formData }));
  };  

  return (
    <>
      <ToastContainer />
      <Wrapper>
        <Form>
          <Input
            placeholder={LOCALE.emailPlaceholder[language]}
            id='email'
            name='email'
            type='text'
            onChange={handleInputChange}
            value={formData.email}
          />
          <Input
            placeholder={LOCALE.passwordPlaceholder[language]}
            id='password'
            name='password'
            type='password'
            onChange={handleInputChange}
            value={formData.password}
          />
          <Button disabled={loading} onClick={handleRegister}>
            {LOCALE.registerButton[language]}
          </Button>
          <Button disabled={loading} onClick={handleLogin}>
            {LOCALE.loginButton[language]}
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
