import i18n from "i18next";
import { initReactI18next } from "./dependencies/react-i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});
