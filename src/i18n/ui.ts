export type Languages = "en" | "dk";

export type UiType = {
  "nav.home": string;
  "nav.about": string;
};

export const languages = {
  en: "English",
  dk: "Dansk",
};

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
  },
  dk: {
    "nav.home": "Hjem",
    "nav.about": "Om",
  },
} as const;

export const defaultLang = "en" as const;
