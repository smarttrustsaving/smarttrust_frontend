import React from "react";
import { Row, Col, Form, Table } from "react-bootstrap";
import Basic from "../../client/layouts/Basic";

const Calculator = () => {
  const [loanObj, setLoanObj] = React.useState({
    principal: 100000,
    rate: 10,
    term: 12,
  });

  const principleHandler = ({ target: { value } }) => {
    setLoanObj({
      ...loanObj,
      principal: value,
    });
  };
  const rateHandler = ({ target: { value } }) => {
    setLoanObj({
      ...loanObj,
      rate: value,
    });
  };
  const termHandler = ({ target: { value } }) => {
    setLoanObj({
      ...loanObj,
      term: value,
    });
  };

  const getEMI = () => {
    const { principal: p, rate, term: n } = loanObj;
    const r = rate / 1200;

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const perMonthWithoutInterest = p / n;
    const interestPerMonth = emi - perMonthWithoutInterest;

    const array = [];

    for (let i = 1; i <= n; i++) {
      array.push({
        emi,
        interest: interestPerMonth * i,
        payment: emi * i,
        balance: p - perMonthWithoutInterest * i,
      });
    }

    return array;
  };

  return (
    <Basic title="EMI Calculator" image="/tools_page/calc.jpg">
      <Row>
        <Col lg={4} xs={12}>
          <Form>
            <Form.Group>
              <Form.Label>Principle:</Form.Label>
              <Form.Control
                onChange={principleHandler}
                type="number"
                placeholder="100000"
              />
              <Form.Text className="text-muted">
                Priciple must be in Nepali Rupees.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Rate:</Form.Label>
              <Form.Control
                onChange={rateHandler}
                type="number"
                placeholder="10"
              />
              <Form.Text className="text-muted">Rate must be in APR.</Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Term:</Form.Label>
              <Form.Control
                onChange={termHandler}
                type="number"
                placeholder="12"
              />
              <Form.Text className="text-muted">
                Term must be in months.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col lg={8} xs={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>EMI</th>
                <th>Total Interest</th>
                <th>Total Payment</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {getEMI().map(({ emi, interest, payment, balance }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{parseFloat(emi).toFixed(1)}</td>
                  <td>{parseFloat(interest).toFixed(1)}</td>
                  <td>{parseFloat(payment).toFixed(1)}</td>
                  <td>{parseFloat(balance).toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Basic>
  );
};

export default Calculator;
