import React, { useState, createContext, useContext, FC } from 'react';

import { LANGUAGE } from '../config/constants';

const initialLanguage = LANGUAGE.ENG;

const LanguageContext = createContext({
    language: initialLanguage,
});

type TProps = {
  children: JSX.Element;
}

const Language: FC<TProps> = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGE>(initialLanguage);

  return (
    <LanguageContext.Provider value={{
      language,
      // @ts-ignore
      setLanguage,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;

export const useLanguage = () => useContext(LanguageContext);
