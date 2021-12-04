import { useState, useRef } from 'react';

import api from 'utils/api';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const executor = useRef();

  // use abstraction
  const doFetch = async (e) => {
    executor.current = e;

    setLoading(true);

    try {
      const response = await executor.current(api);

      if (response.status !== 201 && response.status !== 200) {
        throw new Error(response.message || 'Something went wrong');
      }

      setResponse(response);
      setLoading(false);
    } catch(error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return { loading, response, error, doFetch, clearError };
};

export default useFetch;
