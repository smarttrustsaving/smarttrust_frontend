import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import axios from "../../client/axios";
import { loggedOut } from "../../client/hocs/redirects";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);

  const rates = [
    {
      title: "Saving Accounts",
      link: "savings",
    },
    {
      title: "Periodic Deposit Accounts",
      link: "periodics",
    },
    {
      title: "Loan Interests",
      link: "loans",
    },
  ];

  const logoutHandler = () => {
    setLoading(true);

    axios
      .post(
        `/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((_) => {})
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <Container className="my-5 py-5">
      <Row>
        {rates.map((rate) => (
          <Col
            key={rate.title}
            className="d-flex justify-content-center pb-5"
            lg={4}
            md={6}
            xs={12}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <span className="text-nowrap">{rate.title}</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link href={`/adminpanel/${rate.link}`}>
                  <Button className="mt-2">Update</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center">
        <Button
          variant="danger"
          onClick={logoutHandler}
          style={{
            height: 50,
            width: 100,
          }}
        >
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <div>Logout</div>
          )}
        </Button>
      </div>
    </Container>
  );
};

export default loggedOut(AdminPanel);
