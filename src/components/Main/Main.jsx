import "./Main.scss"
import TranslateSection from "../TranslateSection/TranslateSection.jsx"
import { PiTranslateBold  } from "react-icons/pi";

const Main = () => {
    return (
        <main className="main">

            <div className="titulo">
                <div className="icono">
                    <PiTranslateBold  className="icon" />
                </div>
                <h1> Translator.LucasCabral </h1>
            </div>

            <TranslateSection />

        </main>
    )
}

export default Main