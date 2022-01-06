import React from 'react';

import { useLanguage, LANGUAGE } from 'features/Language';

import { Wrapper , Button} from './styled';

const Language = () => {
 const { language, setLanguage } = useLanguage();

  return (
      <Wrapper>
          {Object.keys(LANGUAGE).map((lang) => (
            <Button isActive={language === lang} key={lang} onClick={() => setLanguage(lang)}>{lang}</Button>
          ))}
      </Wrapper>
    );
};

export default Language;
