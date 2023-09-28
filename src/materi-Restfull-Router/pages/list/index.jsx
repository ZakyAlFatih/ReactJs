import { useEffect, useState } from "react";
import { httpService } from "../../utils/httpService";
import { Card, Container } from "react-bootstrap";

const ListPage = () => {
  const [list, setList] = useState([]);

  const fetchProduct = async () => {
    const response = await httpService.get("/product");
    // .then(response => {
    //     console.log('resnya', response)
    // })
    console.log("response", response.data);
    setList(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Container
      style={{
        display: "flex",
        gap: "24px",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {list.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default ListPage;
