import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";

function App() {
  const [noticias, setNoticias] = useState({});
  useEffect(() => {
    consultarApi();
  }, []);
  const consultarApi = async () =>{
    try{
      const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_2390338fd0d756307ef040ecd26608655dde4&q=pizza");

      const dato = await respuesta.json();
      setNoticias(dato)
      console.log(dato)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <>
      <h1 className="text-center display-3">NOTICIAS</h1>
      <hr />
      <Container>
        <Formulario noticias={noticias}></Formulario>
      </Container>
    </>
  );
}

export default App;
