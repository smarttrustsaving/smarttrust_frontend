import Link from "next/link";
import { Container, Table, Button } from "react-bootstrap";
import { loggedOut } from "../../client/hocs/redirects";
import Loading from "../../client/components/Loading";
import Periodic from "../../client/components/adminpanel/Periodic";
import { useEffect, useState } from "react";
import axios from "../../client/axios";

const Periodics = () => {
  const [periodics, setPeriodics] = useState(undefined);

  useEffect(() => {
    axios.get("/all/periodics").then(({ data }) => setPeriodics(data));
  }, []);

  if (!periodics) return <Loading />;

  return (
    <Container className="py-5 my-5">
      <div className="py-5">
        <div>
          <h2>Periodic Deposit Accounts:</h2>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Period</th>
              <th>Quaterly Interest (%)</th>
              <th>Yearly Interest (%)</th>
              <th>Upon Maturity (%)</th>
            </tr>
          </thead>
          <tbody>
            {periodics.map(
              ({ id, period, quaterly, yearly, maturity }, index) => (
                <Periodic
                  key={index}
                  id={id}
                  period={period}
                  quaterly={quaterly}
                  yearly={yearly}
                  maturity={maturity}
                />
              )
            )}
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

export default loggedOut(Periodics);
