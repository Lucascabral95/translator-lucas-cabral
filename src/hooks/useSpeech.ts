import { useCallback } from "react";

interface UseSpeech {
  speak: (text: string, lang?: string) => void;
  cancel: () => void;
}

export const useSpeech = (): UseSpeech => {
  const speak = useCallback((text: string, lang?: string): void => {
    if (!text.trim() || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    if (lang && lang !== "mt") {
      utterance.lang = lang;
    }

    window.speechSynthesis.speak(utterance);
  }, []);

  const cancel = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return { speak, cancel };
};
