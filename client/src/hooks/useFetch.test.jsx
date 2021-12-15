import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useFetch from "./useFetch";

describe('useFetch performs request',  () => {
  it('test', async () => {
    const mock = new MockAdapter(axios);

    const mockData = 'response';
    const url = '/api/auth/login';
    const executor = (api) => api.user.register({ email: 'email', password: 'pass' });

    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(executor)
    );

    expect(result.current.data).toEqual(undefined);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual("response");
    expect(result.current.loading).toBeFalsy();
  });
});