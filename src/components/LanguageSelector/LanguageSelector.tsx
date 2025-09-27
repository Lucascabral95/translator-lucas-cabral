import { memo } from "react";
import { Language } from "../../types";

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  showDetectOption?: boolean;
  popularLanguages?: { code: string; name: string }[];
}

const LanguageSelector = memo(
  ({
    languages,
    selectedLanguage,
    onLanguageChange,
    showDetectOption = false,
    popularLanguages = [
      { code: "en", name: "English" },
      { code: "es", name: "Spanish" },
      { code: "fr", name: "French" },
    ],
  }: LanguageSelectorProps): JSX.Element => {
    const getButtonStyle = (langCode: string) => ({
      backgroundColor: selectedLanguage === langCode ? "#4D5462" : "transparent",
      color: selectedLanguage === langCode ? "white" : "#424956",
    });

    return (
      <div className="lenguajes">
        {showDetectOption && (
          <div
            className="deteccion-lenguaje"
            style={getButtonStyle("mt")}
            onClick={() => onLanguageChange("mt")}
          >
            <p style={{ color: selectedLanguage === "mt" ? "white" : "#424956" }}>
              Detect Language
            </p>
          </div>
        )}
        <div
          className={`lenguajes-disponibles ${!showDetectOption ? "m-0" : ""}`}
        >
          {popularLanguages.map(({ code, name }) => (
            <div
              key={code}
              className={`len len-lenguaje ${
                name === "French" ? "len-lenguaje-fr len-mobile-lenguaje" : ""
              }`}
              style={getButtonStyle(code)}
              onClick={() => onLanguageChange(code)}
            >
              <p>{name}</p>
            </div>
          ))}
          <select
            name="idiomas"
            className="len len-more"
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            {languages.map((idioma) => (
              <option key={idioma.lenguaje} value={idioma.lenguaje}>
                {idioma.idioma}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

LanguageSelector.displayName = "LanguageSelector";

export default LanguageSelector;
