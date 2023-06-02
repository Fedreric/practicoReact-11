import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
const Formulario = () => {
  return (
    <>
    <Form className="container">
      <Form.Group className="row align-items-center" controlId="formBasicEmail">
        <div className="col-md-2">
          <Form.Label>Buscar por categorias:</Form.Label>
        </div>
        <div className="col-md-10">
          <Form.Select id="categoria">
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 3</option>
            <option>Categoria 4</option>
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
