import { ui, defaultLang, type Languages, type UiType } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Languages;
  return defaultLang;
}

export function useTranslations(lang: Languages) {
  return function t(key: keyof UiType) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
