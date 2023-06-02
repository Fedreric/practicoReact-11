import { Row, CardGroup } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticiasFiltradas }) => {
  return (
    <CardGroup>
      <Row>
        {noticiasFiltradas.map((noticia, index) => (
          <Noticia key={index} noticia={noticia}></Noticia>
        ))}
      </Row>
    </CardGroup>
  );
};

export default ListaNoticias;
