import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

function noop() {}
const storageName = 'userData';

const AuthContextInner = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAauth: false,
});

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const isAuth = !!token;

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.toke) {
      login(data.token, data.userId);
    }
  }, [login]);

  return (
    <AuthContextInner.Provider value={{ login, logout, token, userId, isAuth }}>
      {children}
    </AuthContextInner.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(AuthContextInner);
