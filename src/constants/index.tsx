export * from "./languages";

const LINGVA_API = "https://lingva.ml/api/v1";
const APERTIUM_API = "https://www.apertium.org/apy/translate";

export const API_CONFIG = {
  TIMEOUT: 15000,
  RETRY_ATTEMPTS: 3,
  ENDPOINTS: {
    LINGVA: LINGVA_API,
    APERTIUM: APERTIUM_API,
  },
} as const;

export const TOAST_CONFIG = {
  SUCCESS: {
    duration: 3000,
    style: { backgroundColor: "#10B981", color: "white" },
  },
  ERROR: {
    duration: 4000,
    style: { backgroundColor: "#EF4444", color: "white" },
  },
} as const;
