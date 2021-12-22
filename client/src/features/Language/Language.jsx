import React from 'react';

import { useLanguage } from 'context/LanguageContext';
import { Wrapper , Button} from './style';

const Language = () => {
 const { languages, setLanguage } = useLanguage();
 

return (
        <Wrapper>
            <Button onClick={()=>{setLanguage(languages.ENG);}}>ENG</Button>
            <Button onClick={()=>{setLanguage(languages.UKR);}}>UKR</Button>
        </Wrapper>
    );
};

export default Language;