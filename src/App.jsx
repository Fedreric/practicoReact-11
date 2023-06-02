import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  return (
    <>
      <h1 className="text-center display-3">NOTICIAS</h1>
      <hr />
      <Container>
        <Formulario></Formulario>
        <ListaNoticias></ListaNoticias>
      </Container>
    </>
  );
}

export default App;
