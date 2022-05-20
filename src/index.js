import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "./dependencies/react-i18next";
import i18next from "./dependencies/i18next";
import LanguageDetector from "./dependencies/i18next-browser-languagedetector";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
