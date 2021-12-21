import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const storageName = 'userData';

const AuthContextInner = createContext({
  isAuth: false,
});

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = useCallback((jwtToken, id) => {
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );

    setIsAuth(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(storageName);
    setIsAuth(false);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data) {
      const { token, userId } = data;

      if (token) {
        login(token, userId);
      }
    }
  }, []);

  return (
    <AuthContextInner.Provider value={{ login, logout, isAuth }}>
      {children}
    </AuthContextInner.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(AuthContextInner);
