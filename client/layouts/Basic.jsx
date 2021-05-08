import { Container } from "react-bootstrap";

const Basic = ({ image, title, children }) => {
  return (
    <>
      <div
        style={{
          height: "500px",
          background: `url("${image}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="basicContentContainer">
          <Container>{title}</Container>
        </div>
      </div>
      <Container className="py-5">{children}</Container>
    </>
  );
};

export default Basic;
