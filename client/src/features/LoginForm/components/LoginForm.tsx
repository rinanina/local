import React, { useState, useEffect, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toast';
import { useNavigate } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import { Page } from 'features/Page';
import { useAuth } from 'context/AuthContext';
import { useLanguage } from 'features/Language';
import { Input, Button, FormElement } from 'components';

import { Wrapper, Form } from './styled';
import { LOCALE } from '../config/locale';

const LoginForm = () => {
  const { language } = useLanguage();
  const {  response, error, clearError, doFetch } = useFetch<any>();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const auth = useAuth();

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log('handleInputChange');
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

      const { message, token, userId } = response.data;

      // TODO: is not set for login because redirect unmount current component --> make toasters global
      toast.success(message);

      if (userId && token) {
        auth.login && auth.login(token, userId);
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

  const handleRegister = async (event: ChangeEvent) => {
    event.preventDefault();

    await doFetch((api) => api.user.register({ ...formData }));
  };

  const handleLogin = async (event: ChangeEvent) => {
    event.preventDefault();

    await doFetch((api) => api.user.login({ ...formData }));
  };

  return (
    <>
      <ToastContainer />
      <Wrapper>
        <Form>
          <FormElement>
            <Input
              placeholder={LOCALE.emailPlaceholder[language]}
              id='email'
              name='email'
              type='text'
              onChange={handleInputChange}
              value={formData.email}
            />
          </FormElement>
          <FormElement>
            <Input
              placeholder={LOCALE.passwordPlaceholder[language]}
              id='password'
              name='password'
              type='password'
              onChange={handleInputChange}
              value={formData.password}
            />
          </FormElement>
          <FormElement>
            <Button text={LOCALE.registerButton[language]} onClick={handleRegister} fullWidth />
          </FormElement>
          <FormElement>
            <Button text={LOCALE.loginButton[language]} onClick={handleLogin} fullWidth />
          </FormElement>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginForm;
