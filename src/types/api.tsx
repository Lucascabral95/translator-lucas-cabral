export interface LingvaResponse {
  translation: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}
