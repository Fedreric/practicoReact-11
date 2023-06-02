import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useState } from "react";
const Formulario = ({noticias}) => {
    const [categoria, setCategoria] = useState('');
  return (
    <>
    <Form className="container">
      <Form.Group className="row align-items-center" controlId="formBasicEmail">
        <div className="col-md-2">
          <Form.Label>Buscar por categorias:</Form.Label>
        </div>
        <div className="col-md-10">
          <Form.Select id="categoria" value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
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
    <ListaNoticias></ListaNoticias>
    </>
  );
};

export default Formulario;
