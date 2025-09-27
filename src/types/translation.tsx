export interface Language {
  idioma: string;
  lenguaje: string;
}

export interface TranslationRequest {
  text: string;
  source: string;
  target: string;
}

export interface TranslationResponse {
  translation: string;
  detectedLanguage?: string;
}

export interface TranslationState {
  text: string;
  selectedLanguage: string;
  targetLanguage: string;
  translationResponse: string;
  isLoading: boolean;
  error: string | null;
}
