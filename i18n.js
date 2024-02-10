import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector'

const languages=['tm','ru','en']
export const locales = {tm:"Turkmen", ru:"Rus", en:"English"}
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)

.init({
    lng: localStorage.getItem("i18nextLng") || languages[0],
    fallbackLng: languages[0],
    debug:true,
    whitelist:languages,

})
export default i18n;
