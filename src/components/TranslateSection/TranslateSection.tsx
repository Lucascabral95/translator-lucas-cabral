import { useState, useCallback, useEffect, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import { PiTranslateDuotone } from "react-icons/pi";

import { useTranslationApi } from "../../hooks/useTranslationApi";
import { useSpeech } from "../../hooks/useSpeech";
import { useClipboard } from "../../hooks/useClipboard";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ActionButtons from "../ActionButtons/ActionButtons";

import {
  SUPPORTED_LANGUAGES,
  DEFAULT_SOURCE_LANGUAGE,
  DEFAULT_TARGET_LANGUAGE,
  TOAST_CONFIG,
} from "../../constants";
import "./TranslateSection.scss";

const TranslateSection = (): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>(
    DEFAULT_SOURCE_LANGUAGE
  );
  const [targetLanguage, setTargetLanguage] = useState<string>(
    DEFAULT_TARGET_LANGUAGE
  );
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const { isLoading, error, translate } = useTranslationApi();
  const { speak, cancel } = useSpeech();
  const { copy } = useClipboard();

  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        position: window.innerWidth < 480 ? "bottom-center" : "top-center",
        ...TOAST_CONFIG.ERROR,
      });
    }
  }, [error]);

  const handleTranslate = useCallback(async () => {
    if (sourceLanguage === targetLanguage && sourceLanguage !== "mt") {
      toast.error("Source and target languages cannot be the same", {
        ...TOAST_CONFIG.ERROR,
      });
      return;
    }

    const result = await translate(text, sourceLanguage, targetLanguage);
    if (result) {
      setTranslatedText(result);
      toast.success("Translation completed!", {
        ...TOAST_CONFIG.SUCCESS,
      });
    }
  }, [text, sourceLanguage, targetLanguage, translate]);

  const handleDelete = useCallback(() => {
    const message = text ? "Text deleted!" : "No text to delete.";
    const toastType = text ? toast.success : toast.error;

    setText("");
    setTranslatedText("");
    cancel();

    toastType(message, {
      position: window.innerWidth < 480 ? "bottom-center" : "top-center",
      ...(text ? TOAST_CONFIG.SUCCESS : TOAST_CONFIG.ERROR),
    });
  }, [text, cancel]);

  const sourceValue = useMemo(() => {
    return !isInputFocused && !text ? "Write your text here..." : text;
  }, [isInputFocused, text]);

  const targetValue = useMemo(() => {
    if (isLoading) return "Translating...";
    return translatedText || "Waiting for request...";
  }, [isLoading, translatedText]);

  return (
    <section className="translate-section">
      <Toaster />

      <div className="traduccion-entrada">
        <LanguageSelector
          languages={SUPPORTED_LANGUAGES}
          selectedLanguage={sourceLanguage}
          onLanguageChange={setSourceLanguage}
          showDetectOption
        />
        <div className="entrada">
          <textarea
            value={sourceValue}
            className="entrada-texto"
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            disabled={isLoading}
          />
        </div>
        <div className="botones">
          <ActionButtons
            onListen={() => speak(text, sourceLanguage)}
            onCopy={() => copy(text, "Source text")}
            onDelete={handleDelete}
          />
          <div className="traducir">
            <div className="trad" onClick={handleTranslate}>
              <div className="icono">
                <PiTranslateDuotone className="icon" />
              </div>
              <p>{isLoading ? "Translating..." : "Translate"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="traduccion-entrada">
        <LanguageSelector
          languages={SUPPORTED_LANGUAGES}
          selectedLanguage={targetLanguage}
          onLanguageChange={setTargetLanguage}
        />
        <div className="entrada">
          <textarea
            value={targetValue}
            className="entrada-texto"
            readOnly
            disabled={isLoading}
          />
        </div>
        <div className="botones">
          <ActionButtons
            onListen={() => speak(translatedText, targetLanguage)}
            onCopy={() => copy(translatedText, "Translated text")}
          />
        </div>
      </div>
    </section>
  );
};

export default TranslateSection;
