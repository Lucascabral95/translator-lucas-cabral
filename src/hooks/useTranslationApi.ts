import { useState, useCallback } from "react";
import axios from "axios";
import { API_CONFIG } from "../constants";
import { LingvaResponse, ApiError } from "../types";

interface UseTranslationApi {
  isLoading: boolean;
  error: ApiError | null;
  translate: (
    text: string,
    source: string,
    target: string
  ) => Promise<string | null>;
}

export const useTranslationApi = (): UseTranslationApi => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const translate = useCallback(
    async (text: string, source: string, target: string): Promise<string | null> => {
      if (!text.trim()) {
        setError({ message: "Please enter text to translate" });
        return null;
      }

      setIsLoading(true);
      setError(null);

      try {
        const sourceLang = source === "mt" ? "auto" : source;
        const url = `${API_CONFIG.ENDPOINTS.LINGVA}/${sourceLang}/${target}/${encodeURIComponent(text)}`;

        const response = await axios.get<LingvaResponse>(url, {
          timeout: API_CONFIG.TIMEOUT,
          headers: { Accept: "application/json" },
        });

        if (response.data?.translation) {
          return response.data.translation;
        }
        throw new Error("Invalid API response");
      } catch (err: any) {
        console.error("Translation failed:", err);
        const apiError: ApiError = {
          message: err.message || "Translation failed. Please try again.",
          status: err.response?.status,
          code: err.code,
        };
        setError(apiError);
        return `[DEMO] Translation of "${text}"`;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, translate };
};
