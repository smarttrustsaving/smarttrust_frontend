import axios from "../../client/axios";
import { Table } from "react-bootstrap";
import Basic from "../../client/layouts/Basic";
import Loading from "../../client/components/Loading";
import { useEffect, useState } from "react";

const RateFees = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios.get("/all/all").then(({ data }) => {
      setData(data);
    });
  }, []);

  if (!data) return <Loading />;

  return (
    <Basic title="Rates and Fees" image="/tools_page/rate.jpg">
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
            {data.savings.map((saving, index) => (
              <tr key={index}>
                <td>{saving.name}</td>
                <td>{saving.rate}%</td>
                <td>
                  {saving.minimum
                    .toString()
                    .replace(/\B(?=((\d{2})*\d{3})(?!\d))/g, ",")}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="py-5">
        <div>
          <h2>Period Deposit Accounts:</h2>
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
            {data.periodics.map((period, index) => (
              <tr key={index}>
                <td>{period.period}</td>
                <td>
                  {period.quaterly ? <span>{period.quaterly}%</span> : "-"}
                </td>
                <td>{period.yearly ? <span>{period.yearly}%</span> : "-"}</td>
                <td>{period.maturity}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

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
            {data.loans.map((loan, index) => (
              <tr key={index}>
                <td>{loan.type}</td>
                <td>{loan.rate}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Basic>
  );
};

export default RateFees;
