import { memo } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ActionButtons from "../ActionButtons/ActionButtons";
import { Language } from "../../types";

interface TranslationCardProps {
  id: string;
  value: string;
  placeholder?: string;
  isReadOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  onListen: () => void;
  onCopy: () => void;
  onDelete?: () => void;
  showDetectLanguage?: boolean;
}

const TranslationCard = memo(
  ({
    id,
    value,
    placeholder,
    isReadOnly = false,
    onChange,
    onFocus,
    onBlur,
    languages,
    selectedLanguage,
    onLanguageChange,
    onListen,
    onCopy,
    onDelete,
    showDetectLanguage = false,
  }: TranslationCardProps): JSX.Element => {
    return (
      <div className="traduccion-entrada">
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
          showDetectOption={showDetectLanguage}
        />
        <div className="entrada">
          <textarea
            id={id}
            value={value}
            className="entrada-texto"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            readOnly={isReadOnly}
          />
        </div>
        <div className="botones">
          <ActionButtons
            onListen={onListen}
            onCopy={onCopy}
            onDelete={onDelete}
          />
        </div>
      </div>
    );
  }
);

TranslationCard.displayName = "TranslationCard";

export default TranslationCard;
