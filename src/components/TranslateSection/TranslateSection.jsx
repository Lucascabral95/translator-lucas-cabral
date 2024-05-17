import "./TranslateSection.scss"
import { useState, useEffect } from 'react';
import { AiFillSound, AiOutlineCopy } from "react-icons/ai";
import { PiTranslateDuotone } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Idiomas from "../../JSON/Idiomas.json"
import toast, { Toaster } from 'react-hot-toast';

const TranslateSection = () => {
    const [text, setText] = useState("");
    const [lenguajeSeleccionada, setLenguajeSeleccionada] = useState("es");
    const [idiomaRespuesta, setIdiomaRespuesta] = useState("en");
    const [respuestaTraduccion, setRespuestaTraduccion] = useState("");
    const [activeDetail, setActiveDetail] = useState("");
    const [activeDetailResponse, setActiveDetailResponse] = useState("");
    const [textAreaSelected, setTextAreaSelected] = useState(true);
    const [textAreaRelleno, setTextAreaRelleno] = useState("Write your text here...");

    async function traduccion() {
        const response = await axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=${lenguajeSeleccionada}|${idiomaRespuesta}`)
        setRespuestaTraduccion(response.data.responseData.translatedText);

        console.log(`Lenguaje a traducir: ${lenguajeSeleccionada}. Lenguaje traducido: ${idiomaRespuesta}`);
    }

    const speakTextSalida = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.volume = 10;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    };

    const speakTextEntrada = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = respuestaTraduccion;
        speech.volume = 10;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        const position = window.innerWidth < 480 ? "bottom-center" : "top-center";
        const message = text === "" ? 'No text found!' : 'Copied to clipboard!';
        const type = text === "" ? toast.error : toast.success;

        type(message, {
            position,
            style: {
                backgroundColor: '#2B1039',
                color: 'white',
            }
        });
    };

    const handleCopyResponse = () => {
        navigator.clipboard.writeText(respuestaTraduccion)
        const position = window.innerWidth < 480 ? "bottom-center" : "top-center";
        const message = respuestaTraduccion === "" ? 'No text found!' : 'Copied to clipboard!';
        const type = respuestaTraduccion === "" ? toast.error : toast.success;
    
        type(message, {
            position,
            style: {
                backgroundColor: '#2B1039',
                color: 'white',
            }
        });
    };

    const notifyDelete = () => {
        const position = window.innerWidth < 480 ? "bottom-center" : "top-center";
        const message = text === "" ? 'No text found!' : 'Text deleted!';
        const type = text === "" ? toast.error : toast.success;

        type(message, {
            position,
            style: {
                backgroundColor: '#2B1039',
                color: 'white',
            }
        });
    };

    return (
        <section className='translate-section'>

            <Toaster />

            <div className="traduccion-entrada">
                <div className="lenguajes">
                    <div className="deteccion-lenguaje"
                        style={{ backgroundColor: lenguajeSeleccionada === "mt" && "#4D5462", color: lenguajeSeleccionada === "mt" ? "white" : "#424956" }}
                        onClick={() => setLenguajeSeleccionada("mt")}
                    >
                        <p style={{ color: lenguajeSeleccionada === "mt" ? "white" : "#424956" }}> Detect Language </p>
                    </div>
                    <div className="lenguajes-disponibles">
                        <div className="len len-lenguaje"
                            style={{ backgroundColor: lenguajeSeleccionada === "en" && "#4D5462", color: lenguajeSeleccionada === "en" ? "white" : "#424956" }}
                            onClick={() => setLenguajeSeleccionada("en")}>
                            <p> English </p>
                        </div>
                        <div className="len len-lenguaje"
                            style={{ backgroundColor: lenguajeSeleccionada === "es" && "#4D5462", color: lenguajeSeleccionada === "es" ? "white" : "#424956" }}
                            onClick={() => setLenguajeSeleccionada("es")}>
                            <p> Spanish </p>
                        </div>
                        <div className="len len-lenguaje len-lenguaje-fr"
                            style={{ backgroundColor: lenguajeSeleccionada === "fr" && "#4D5462", color: lenguajeSeleccionada === "fr" ? "white" : "#424956" }}
                            onClick={() => setLenguajeSeleccionada("fr")}>
                            <p> French </p>
                        </div>
                        <select
                            name="idiomas" id="idiomas" className="len len-more" value={lenguajeSeleccionada} onChange={(e) => setLenguajeSeleccionada(e.target.value)}
                        >
                            {Idiomas.map((idioma) => (
                                <option key={idioma.lenguaje} value={idioma.lenguaje}>
                                    {idioma.idioma}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="entrada">
                    <textarea
                        value={text === "" && textAreaSelected ? textAreaRelleno : text}
                        className="entrada-texto"
                        onChange={(e) => setText(e.target.value)}
                        onFocus={() => setTextAreaSelected(false)}
                        onBlur={() => setTextAreaSelected(true)}
                    >
                    </textarea>
                </div>
                <div className="botones">
                    <div className="sonido-copiar">
                        <div className="contenedor-de-tooltip">
                            <div className="icono"
                                onMouseEnter={() => setActiveDetail("listen")} onMouseLeave={() => setActiveDetail("")}
                                onClick={speakTextSalida}
                            >
                                <AiFillSound className="icon" />
                            </div>
                            <div className="informacion-icono" style={{ display: activeDetail === "listen" ? "block" : "none" }}>
                                <p> Listen </p>
                            </div>
                        </div>

                        <div className="contenedor-de-tooltip">
                            <div className="icono icono-copy"
                                onMouseEnter={() => setActiveDetail("copy")} onMouseLeave={() => setActiveDetail("")}
                                onClick={handleCopyText}>
                                <AiOutlineCopy className="icon" />
                            </div>
                            <div className="informacion-icono"
                                style={{ display: activeDetail === "copy" ? "block" : "none" }}>
                                <p> Copy </p>
                            </div>
                        </div>

                        <div className="contenedor-de-tooltip">
                            <div className="icono icono-copy"
                                onMouseEnter={() => setActiveDetail("delete")} onMouseLeave={() => setActiveDetail("")}
                                onClick={() => { setText(""), setRespuestaTraduccion(""), notifyDelete() }}>
                                <MdDelete className="icon" />
                            </div>
                            <div className="informacion-icono" style={{ display: activeDetail === "delete" ? "block" : "none" }}>
                                <p> Delete </p>
                            </div>
                        </div>
                    </div>
                    <div className="traducir">
                        <div className="trad" onClick={traduccion}>
                            <div className="icono">
                                <PiTranslateDuotone className="icon" />
                            </div>
                            <p> Translate </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="traduccion-entrada">
                <div className="lenguajes">
                    <div className="lenguajes-disponibles m-0">
                        <div className="len"
                            style={{ backgroundColor: idiomaRespuesta === "en" && "#4D5462", color: idiomaRespuesta === "en" ? "white" : "#424956" }}
                            onClick={() => setIdiomaRespuesta("en")}>
                            <p> English </p>
                        </div>
                        <div className="len"
                            style={{ backgroundColor: idiomaRespuesta === "es" && "#4D5462", color: idiomaRespuesta === "es" ? "white" : "#424956" }}
                            onClick={() => setIdiomaRespuesta("es")}>
                            <p> Spanish </p>
                        </div>
                        <div className="len len-mobile-lenguaje"
                            style={{ backgroundColor: idiomaRespuesta === "fr" && "#4D5462", color: idiomaRespuesta === "fr" ? "white" : "#424956" }}
                            onClick={() => setIdiomaRespuesta("fr")}>
                            <p> French </p>
                        </div>
                        <select
                            name="idiomas" id="idiomas" className="len len-more" value={idiomaRespuesta} onChange={(e) => setIdiomaRespuesta(e.target.value)}
                        >
                            {Idiomas.map((idioma) => (
                                <option key={idioma.lenguaje} value={idioma.lenguaje}>
                                    {idioma.idioma}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="entrada">
                    <textarea
                        value={respuestaTraduccion === "" ? "Waiting for request..." : respuestaTraduccion}
                        className="entrada-texto"
                    >
                    </textarea>
                </div>
                <div className="botones">
                    <div className="sonido-copiar">
                        <div className="contenedor-tooltip">
                            <div className="icono"
                                onMouseEnter={() => setActiveDetailResponse("listen")} onMouseLeave={() => setActiveDetailResponse("")}
                                onClick={speakTextEntrada}
                            >
                                <AiFillSound className="icon" />
                            </div>
                            <div className="informacion-icono" style={{ display: activeDetailResponse === "listen" ? "block" : "none" }} >
                                <p> Listen </p>
                            </div>
                        </div>
                        <div className="contenedor-tooltip">
                            <div className="icono icono-copy"
                                onMouseEnter={() => setActiveDetailResponse("copy")} onMouseLeave={() => setActiveDetailResponse("")}
                                onClick={handleCopyResponse}>
                                <AiOutlineCopy className="icon" />
                            </div>
                            <div className="informacion-icono" style={{ display: activeDetailResponse === "copy" ? "block" : "none" }}>
                                <p> Copy </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TranslateSection;
