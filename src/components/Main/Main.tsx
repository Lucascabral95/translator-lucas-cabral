import { memo } from "react";

import { PiTranslateBold } from "react-icons/pi";
import TranslateSection from "../TranslateSection/TranslateSection";
import "./Main.scss";

const Main = memo((): JSX.Element => {
  return (
    <main className="main">
      <header className="titulo">
        <div className="icono" role="img" aria-label="Ícono de traducción">
          <PiTranslateBold className="icon" aria-hidden="true" />
        </div>
        <h1>Translator.LucasCabral</h1>
      </header>

      <section>
        <TranslateSection />
      </section>
    </main>
  );
});

Main.displayName = "Main";

export default Main;
