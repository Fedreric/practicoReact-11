import { Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Buscar por categorias</Form.Label>
          <Form.Select id="categoria">
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 3</option>
            <option>Categoria 4</option>
          </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
