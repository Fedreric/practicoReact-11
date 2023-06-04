import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useState,useEffect } from "react";
const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");

  const consultarApi = async (categoria) => {
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_2390338fd0d756307ef040ecd26608655dde4&category=" +
          categoria
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
      console.log(dato.results)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Form className="container">
        <Form.Group
          className="row align-items-center"
          controlId="formBasicEmail"
        >
          <div className="col-md-2">
            <Form.Label>Buscar por categorias:</Form.Label>
          </div>
          <div className="col-md-10">
            <Form.Select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              onInput={()=>{consultarApi(categoria)}}
            >
              <option>business</option>
              <option>entertainment</option>
              <option>environment</option>
              <option>food</option>
              <option>health</option>
              <option>politics</option>
              <option>science</option>
              <option>sports</option>
              <option>technology</option>
              <option>top</option>
              <option>tourism</option>
              <option>world</option>
            </Form.Select>
          </div>
        </Form.Group>
        <hr></hr>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </>
  );
};

export default Formulario;
