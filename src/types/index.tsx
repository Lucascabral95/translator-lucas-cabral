export * from "./translation";
export * from "./common";
export * from "./api";

export interface AppConfig {
  apiTimeout: number;
  maxCharacters: number;
  supportedApis: string[];
}

export interface ToastConfig {
  position: "top-center" | "bottom-center";
  duration: number;
  style: {
    backgroundColor: string;
    color: string;
  };
}
