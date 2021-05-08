import { Table } from "react-bootstrap";
import Basic from "../../client/layouts/Basic";

const Contact = () => {
  return (
    <Basic title="Contact Us" image="/contact_page/contact.jpg">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Phone Number 1: </td>
            <td>4529352</td>
          </tr>
          <tr>
            <td>Phone Number 2: </td>
            <td> 4529122</td>
          </tr>
          <tr>
            <td>Phone Number 3: </td>
            <td>4382824</td>
          </tr>
          <tr>
            <td>Phone Number 4: </td>
            <td>4384288</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>smarttrustsaving111@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </Basic>
  );
};

export default Contact;
