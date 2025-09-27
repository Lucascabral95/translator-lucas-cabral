import { Language } from "../types";

const LANGUAGES: Language[] = [
  { idioma: "Spanish", lenguaje: "es" },
  { idioma: "English", lenguaje: "en" },
  { idioma: "German", lenguaje: "de" },
  { idioma: "Italian", lenguaje: "it" },
  { idioma: "Portuguese", lenguaje: "pt" },
  { idioma: "Russian", lenguaje: "ru" },
  { idioma: "Japanese", lenguaje: "ja" },
  { idioma: "French", lenguaje: "fr" },
  { idioma: "Chinese (simplified)", lenguaje: "zh" },
  { idioma: "Arabic", lenguaje: "ar" },
  { idioma: "Hindi", lenguaje: "hi" },
  { idioma: "Korean", lenguaje: "ko" },
  { idioma: "Dutch", lenguaje: "nl" },
  { idioma: "Polish", lenguaje: "pl" },
  { idioma: "Turkish", lenguaje: "tr" },
  { idioma: "Swedish", lenguaje: "sv" },
  { idioma: "Norwegian", lenguaje: "no" },
  { idioma: "Danish", lenguaje: "da" },
  { idioma: "Finnish", lenguaje: "fi" },
  { idioma: "Greek", lenguaje: "el" },
  { idioma: "Hebrew", lenguaje: "he" },
  { idioma: "Thai", lenguaje: "th" },
  { idioma: "Vietnamese", lenguaje: "vi" },
  { idioma: "Indonesian", lenguaje: "id" },
  { idioma: "Malay", lenguaje: "ms" },
  { idioma: "Ukrainian", lenguaje: "uk" },
  { idioma: "Czech", lenguaje: "cs" },
  { idioma: "Hungarian", lenguaje: "hu" },
  { idioma: "Romanian", lenguaje: "ro" },
  { idioma: "Bulgarian", lenguaje: "bg" },
  { idioma: "Croatian", lenguaje: "hr" },
  { idioma: "Serbian", lenguaje: "sr" },
  { idioma: "Slovak", lenguaje: "sk" },
  { idioma: "Slovenian", lenguaje: "sl" },
  { idioma: "Lithuanian", lenguaje: "lt" },
  { idioma: "Latvian", lenguaje: "lv" },
  { idioma: "Estonian", lenguaje: "et" },
];

export const DEFAULT_SOURCE_LANGUAGE = "es";
export const DEFAULT_TARGET_LANGUAGE = "en";
export const MAX_TEXT_LENGTH = 5000;
export const SUPPORTED_LANGUAGES = LANGUAGES;
