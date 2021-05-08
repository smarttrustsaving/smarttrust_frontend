import Link from "next/link";
import { Container, Table, Button } from "react-bootstrap";
import { loggedOut } from "../../client/hocs/redirects";
import Loading from "../../client/components/Loading";
import Loan from "../../client/components/adminpanel/Loan";
import { useEffect, useState } from "react";
import axios from "../../client/axios";

const Loans = () => {
  const [loans, setLoans] = useState(undefined);

  useEffect(() => {
    axios.get("/all/loans").then(({ data }) => setLoans(data));
  }, []);

  if (!loans) return <Loading />;

  return (
    <Container className="py-5 my-5">
      <div className="py-5">
        <div>
          <h2>Loan Interests:</h2>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type of Loan</th>
              <th>Interest Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {loans.map(({ id, type, rate }, index) => (
              <Loan key={index} id={id} type={type} rate={rate} />
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

export default loggedOut(Loans);
