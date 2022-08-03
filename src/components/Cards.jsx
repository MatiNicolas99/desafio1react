import Card from 'react-bootstrap/Card';


const Cards = ({img}) => {

  return (
    <div>
        {
            img.map((item) => (
                <Card className="mb-3 mt-3 bg-black" key={item.id} style={{ width: '30rem' }}>
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Title>{item.titulo}</Card.Title>
                  <Card.Text>
                      {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
        }
    </div>
  );
};

export default Cards