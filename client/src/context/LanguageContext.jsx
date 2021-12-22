import React from 'react';
import { useState, createContext, useContext } from 'react';

const languages = {
  ENG: 'eng',
  UKR: 'ukr',
};

const LanguageInnerContext = createContext({
    language: null,
    languages: null,
    setLanguage: ()=>{},
});

const LanguageContext = ({ children }) => {
  const [language, setLanguage] = useState(languages.ENG);

  return (
    <LanguageInnerContext.Provider value={{ language, setLanguage, languages }}>
      {children}
    </LanguageInnerContext.Provider>
  );
};

export default LanguageContext;

export const useLanguage = () => useContext(LanguageInnerContext);
