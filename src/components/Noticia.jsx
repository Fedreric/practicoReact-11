import { Card, Col, Button } from "react-bootstrap";

const Noticia = () => {
  return (
    <Col md={6} lg={3} className="my-2">
      <Card>
        <Card.Img variant="top" src="https://media.datacenterdynamics.com/media/images/Extra.width-880.jpg" />
        <Card.Body>
          <Card.Title>Titulo de noticia</Card.Title>
          <Card.Subtitle className="text-muted">Autor</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, a corporis suscipit magni itaque nemo doloremque modi aspernatur sapiente repellendus?
          </Card.Text>
          <Card.Footer>
            <Button variant="primary">Ver noticia completa</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
