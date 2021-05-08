import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Row, Col, Container } from "react-bootstrap";
import Basic from "../../client/layouts/Basic";

const SocialMedia = () => {
  return (
    <>
      <Basic title="Social Media" image="/contact_page/social.jpg">
        <p className="py-4">
          As a member owned bank, we believe in providing exceptional member
          service. Social media is just one of the ways we stay in touch with
          our members and share important and useful information.
        </p>
      </Basic>

      <div className="bg-light">
        <Container>
          <Row>
            <Col xs={4} className="d-flex justify-content-center py-5 my-5">
              <a href="https://www.facebook.com/SMART-TRUST-108684654167468">
                <div className="text-center">
                  <h1>
                    <FaFacebook />
                  </h1>
                  <div>Facebook</div>
                </div>
              </a>
            </Col>
            <Col xs={4} className="d-flex justify-content-center py-5 my-5">
              <a href="https://www.facebook.com/SMART-TRUST-108684654167468">
                <div className="text-center">
                  <h1>
                    <FaTwitter />
                  </h1>
                  <div>Twitter</div>
                </div>
                <h1></h1>
              </a>
            </Col>
            <Col xs={4} className="d-flex justify-content-center py-5 my-5">
              <a href="https://www.facebook.com/SMART-TRUST-108684654167468">
                <div className="text-center">
                  <h1>
                    <FaLinkedin />
                  </h1>
                  <div>LinkedIn</div>
                </div>
                <h1></h1>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SocialMedia;
