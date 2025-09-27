import { useCallback } from "react";
import toast from "react-hot-toast";
import { TOAST_CONFIG } from "../constants";

interface UseClipboard {
  copy: (text: string, entityName?: string) => void;
}

export const useClipboard = (): UseClipboard => {
  const copy = useCallback((text: string, entityName: string = "Text") => {
    const position = window.innerWidth < 480 ? "bottom-center" : "top-center";

    if (!text.trim()) {
      toast.error(`${entityName} not found!`, {
        position,
        ...TOAST_CONFIG.ERROR,
      });
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard!", {
          position,
          ...TOAST_CONFIG.SUCCESS,
        });
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        toast.error("Failed to copy to clipboard.", {
          position,
          ...TOAST_CONFIG.ERROR,
        });
      });
  }, []);

  return { copy };
};
