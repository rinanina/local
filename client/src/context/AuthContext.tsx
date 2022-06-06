import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  FC,
} from 'react';

type TAuthState = {
  isAuth: boolean;
  token: string | null;
  userId: string | null;
  login?: (jwtToken: string, id: string) => void;
  logout?: () => void;
};

type TProps = {
 children: JSX.Element;
};

const storageName = 'userData';

const initialState: TAuthState = { isAuth: false, token: null, userId: null };

const AuthContextInner = createContext(initialState);

const AuthContext: FC<TProps> = ({ children }) => {
  const [authData, setAuthData] = useState<TAuthState>(initialState);

  const login = useCallback((jwtToken: string, id: string) => {
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
    const data = JSON.parse(localStorage.getItem(storageName) as string);

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
