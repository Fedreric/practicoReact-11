import { Card, Col, Button } from "react-bootstrap";
import noFoto from "../assets/noFoto.png"

const Noticia = ({noticia}) => {
    const imagen = noticia.image_url? ( <Card.Img variant="top" src={noticia.image_url} />):( <Card.Img variant="top" src={noFoto} />)
  return (
    <Col md={6} lg={3} className="my-2">
      <Card>
        {imagen}
        <Card.Body>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Subtitle className="text-muted">{noticia.creator}</Card.Subtitle>
          <Card.Text className="descripcion">
           {noticia.description}
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
