import {createContext, useEffect, useState} from "react";
import English from "../lang/en.json";
import Hungarian from "../lang/hu.json";
import Romanian from "../lang/ro.json";
import {IntlProvider} from "react-intl";

export const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [locale, setLocale] = useState(localStorage.getItem('locale') || 'ro');
    const messages = {en: English, hu: Hungarian, ro: Romanian};

    useEffect(() => {
        localStorage.setItem('locale', locale);
    }, [locale]);

    const changeLanguage = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <LanguageContext.Provider value={{locale, changeLanguage}}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
