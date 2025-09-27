import { Language, TooltipType } from "../types";

export interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  showDetectOption?: boolean;
}

export interface ActionButtonsProps {
  activeTooltip: TooltipType;
  onTooltipChange: (tooltip: TooltipType) => void;
  onListen: () => void;
  onCopy: () => void;
  onDelete?: () => void;
  onTranslate?: () => void;
}
