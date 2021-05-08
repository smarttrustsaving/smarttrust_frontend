import Link from "next/link";
import { Container, Table, Button } from "react-bootstrap";
import { loggedOut } from "../../client/hocs/redirects";
import Loading from "../../client/components/Loading";
import Saving from "../../client/components/adminpanel/Saving";
import { useEffect, useState } from "react";
import axios from "../../client/axios";

const Savings = () => {
  const [savings, setSavings] = useState(undefined);

  useEffect(() => {
    axios.get("/all/savings").then(({ data }) => setSavings(data));
  }, []);

  if (!savings) return <Loading />;

  return (
    <Container className="py-5 my-5">
      <div className="py-5">
        <div>
          <h2>Saving Accounts:</h2>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Saving Deposit</th>
              <th>Interest Rate (%)</th>
              <th>Minimum Balance (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {savings.map(({ id, name, rate, minimum }, index) => (
              <Saving
                key={index}
                id={id}
                name={name}
                rate={rate}
                minimum={minimum}
              />
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <span>
          <Link href="/adminpanel">
            <Button variant="dark">Back</Button>
          </Link>
        </span>
      </div>
    </Container>
  );
};

export default loggedOut(Savings);
