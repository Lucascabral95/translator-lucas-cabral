import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App(): JSX.Element {
  return (
    <body className="body">
      <div className="contenedor">
        <Main />
      </div>

      <Footer />
    </body>
  );
}

export default App;
