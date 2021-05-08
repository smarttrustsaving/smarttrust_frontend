import {
  FaChartLine,
  FaComment,
  FaPeopleCarry,
  FaThumbsUp,
} from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import Basic from "../../client/layouts/Basic";

const About = () => {
  const values = [
    {
      name: "Member Service",
      icon: <FaComment />,
      description:
        "We will provide service excellence through every member contact, by truly understanding our members' needs. We put our members at the centre of everything we do.",
    },
    {
      name: "Improvement",
      icon: <FaChartLine />,
      description:
        "We will continuously evaluate our actions in order to improve the quality of our member service.",
    },
    {
      name: "Teamwork",
      icon: <FaPeopleCarry />,
      description:
        "We will work collaboratively at all times, developing and maintaining productive working relationships based on mutual respect.",
    },
    {
      name: "Integrity",
      icon: <FaThumbsUp />,
      description:
        "We will act with integrity, honesty and transparency in all things - with our members, our partners and with each other.",
    },
  ];

  return (
    <Basic title="About Us" image="/about_page/about.jpg">
      <div>
        <p>
          Smart Trust is a different kind of cooperative, built around a big
          idea - It’s your bank, because you own it. Every one of our members is
          an owner with a voice and a say in our future. We make responsible,
          ethical decisions that benefit our members and the community, and
          reinvest our profits to provide better products and services for our
          members.
        </p>
        <p>
          We’ve been in operation since 2001 and have built a team that values
          service, teamwork and integrity, to go above and beyond for our
          members. We have a focus on performance and continuous improvement and
          work hard, together, to get it right.
        </p>

        <p>
          We’re customer driven and provide trusted, personalised service. Our
          call centre is locally based and we aim to get to know our members and
          help them reach their goals. And, we’re there when they need us most.
        </p>

        <p>
          We’re a bank for you, the people you work with, and the people you
          know. A more rewarding community bank for everybody.
        </p>
      </div>

      <div className="pt-5">
        <div>
          <h3>Our Values</h3>
        </div>
        <div>
          At Smart Trust, our culture is underpinned by our values. We strive to
          live these values in all aspects of our work.
        </div>
        <Row className="pt-5">
          {values.map((value) => (
            <Col key={value.name} md={3} sm={6} xs={12}>
              <div className="d-flex justify-content-center text-primary">
                <h1>{value.icon}</h1>
              </div>
              <div className="d-flex justify-content-center">
                <b>{value.name}</b>
              </div>
              <div className="text-center">{value.description}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Basic>
  );
};

export default About;
