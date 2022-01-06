import React, { useState, createContext, useContext } from 'react';

import { LANGUAGE } from '../config/constants';

const initialLanguage = LANGUAGE.ENG;

const LanguageContext = createContext({
    language: initialLanguage,
});

const Index = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Index;

export const useLanguage = () => useContext(LanguageContext);
