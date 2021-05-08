import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cards = () => {
  const cards = [
    {
      title: "Reserve a place in our loan deposit scheme",
      image: "1.jpg",
      link: "/products/loans",
    },
    {
      title: "Seek financial advice from our experts",
      image: "2.jpg",
      link: "/products/financialadvice",
    },
    {
      title: "Open an account",
      image: "3.jpg",
      link: "/products/savingsinvestments",
    },
  ];

  return (
    <Container>
      <Row>
        {cards.map((card) => (
          <Col md={4} key={card.title}>
            <div
              style={{
                height: "380px",
                background: `url("/index_page/${card.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "10px",
              }}
            >
              <div className="cardsContentContainer">
                <div className="p-4">
                  <div className="cardTitle">{card.title}</div>
                  <div>
                    <Link href={card.link}>
                      <Button
                        variant="secondary"
                        className="findOutMore text-primary mt-2"
                      >
                        Find out more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
