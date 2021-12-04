import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toast';
import { useNavigate } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import { Page } from 'features/Page';

const LoginForm = () => {
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
    <div>
      <ToastContainer />
      <div>Login</div>
      <form>
        <input
          placeholder='Input email'
          id='email'
          name='email'
          type='text'
          onChange={handleInputChange}
          value={formData.email}
        />
        <input
          placeholder='Input password'
          id='password'
          name='password'
          type='password'
          onChange={handleInputChange}
          value={formData.password}
        />
        <button disabled={loading} onClick={handleRegister}>Register</button>
        <button disabled={loading} onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
