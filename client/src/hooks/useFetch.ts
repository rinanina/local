import { useState, useRef, useEffect } from 'react';

import API from 'utils/api';

type Config = {
  [key: string]: string;
};

interface ExecHandler<T> {
  (api: typeof API): Promise<T>;
}

interface ResponseHandler<T, R = T> {
  (res: T): R;
}

interface FetchHandler<T, R = T> {
  (exec: ExecHandler<T>, res?: ResponseHandler<T, R>, config?: Config): void;
}

type Response<T, R> = {
  loading: boolean;
  response: R | null;
  error: string | null;
  doFetch: FetchHandler<T, R>,
  clearError: () => void,
};

const useFetch = <T, R = T>(): Response<T, R> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<R | null>(null);
  const executor = useRef<ExecHandler<T>>();
  const responseHandler = useRef<ResponseHandler<T, R>>();

  const doFetch: FetchHandler<T, R> = (
    exec: ExecHandler<T>,
    res: ResponseHandler<T, R> = (res) => res as any,
  ) => {
    executor.current = exec;
    responseHandler.current = res;

    setLoading(true);
  };

  useEffect(() => {
    (async () => {
      if (loading && responseHandler.current && executor.current) {
        try {
          const response = await executor.current(API);
          setResponse(responseHandler.current(response));
          setLoading(false);
        } catch (error: any) {
          setError(error.response.data.message);
          setLoading(false);
        }
      }
    })();
  }, [loading]);

  const clearError = () => setError(null);

  return { loading, response, error, doFetch, clearError };
};

export default useFetch;
