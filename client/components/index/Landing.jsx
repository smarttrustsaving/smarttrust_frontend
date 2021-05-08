import Link from "next/link";
import { Container, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <div
      style={{
        height: "500px",
        background: `url("/index_page/landing.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="landingContentContainer w-100 h-100 d-flex justify-content-center align-items-center">
        <Container>
          <div className="landingTitle">Special Saving's Account</div>
          <div>Minimum balance of Rs. 25,000</div>
          <div className="d-flex justify-content-start">
            <div>
              <div className="landingMath">
                5.00%p.a.<sup>1</sup>
              </div>
              <div>Interest rate</div>
            </div>
            {/* <div className="pl-5">
              <div className="landingMath">
                2.34%p.a.<sup>1</sup>
              </div>
              <div>Comparison rate</div>
            </div> */}
          </div>
          <div className="py-2">
            <Link href="/about">
              <Button variant="secondary" className="text-primary px-md-5 mt-2">
                <b>Learn More</b>
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
