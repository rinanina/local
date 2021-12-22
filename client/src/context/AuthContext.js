import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const storageName = 'userData';

const initialState = { isAuth: false, token: null, userId: null };

const AuthContextInner = createContext(initialState);

const AuthContext = ({ children }) => {
  const [authData, setAuthData] = useState(initialState);

  const login = useCallback((jwtToken, id) => {
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );

    setAuthData({
      isAuth: true,
      token: jwtToken,
      userId: id,
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(storageName);
    setAuthData(initialState);
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
    <AuthContextInner.Provider value={{ login, logout, ...authData }}>
      {children}
    </AuthContextInner.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(AuthContextInner);
