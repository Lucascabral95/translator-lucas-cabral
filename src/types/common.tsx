export type TooltipType = "listen" | "copy" | "delete" | "";

export type LoadingState = "idle" | "loading" | "success" | "error";

export type SupportedLanguage =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "ru"
  | "ja"
  | "zh"
  | "ar"
  | "hi"
  | "ko";

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
