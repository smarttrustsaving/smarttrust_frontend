import { Container, Row, Col, Image } from "react-bootstrap";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container className="pt-5">
        <Row>
          <Col
            md={4}
            xs={12}
            className="px-2 py-2 d-flex justify-content-center"
          >
            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <div>
                  <Image className="footerLogo" src={`/favicon.jpg`} />
                </div>
              </Col>
              <Col xs={12} className="pt-4 pb-5 d-flex justify-content-center">
                <div className="px-2">
                  <GrInstagram size="30" />
                </div>
                <div className="px-2">
                  <FaFacebookSquare size="30" />
                </div>
                <div className="px-2">
                  <FaTwitter size="30" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            md={4}
            xs={12}
            id="footerContactInfo"
            className="px-2 py-2 d-flex justify-content-center"
          >
            <div>
              <ul>
                <li>
                  <h4>Contact Info</h4>
                </li>
                <li>Kathmandu, Nepal</li>
                <li>smarttrustsaving111@gmail.com</li>
                <li>
                  <span>01-4529352, 01-4529122</span>
                </li>
                <li>
                  <span>01-4382824, 01-4384288</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col
            md={4}
            xs={12}
            id="footerOpeningHours"
            className="col-md-4 col-12 py-2 px-2 d-flex justify-content-center"
          >
            <div>
              <div>
                <h4>Office Hours</h4>
              </div>
              <div>Period: Mangsir - Magh</div>
              <div>
                <span className="text-nowrap">
                  Sunday - Thrusday: 10:00am - 4:30pm
                </span>
              </div>
              <div>Friday: 10:00am - 2:30pm</div>
              <div className="py-4">
                <div>Period: Phagun - Kartik</div>
                <div>
                  <span className="text-nowrap">
                    Sunday - Thrusday: 10:00am - 5:00pm
                  </span>
                </div>
                <div>Friday: 10:00am - 3:00pm</div>
              </div>
            </div>
          </Col>

          <Col xs={12} className="d-sm-flex d-none justify-content-center pb-5">
            Copyright © 2020 Smart Trust. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
