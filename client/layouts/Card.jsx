import Link from "next/link";
import { Button } from "react-bootstrap";

const Card = ({ title, description, rate, image, link }) => {
  return (
    <div className="cardsGridComponent w-100 bg-light">
      <div>
        <div
          style={{
            height: "260px",
            width: "100%",
            background: `url("${image}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="cardComponentTitle">{title}</div>
        <div className="cardComponentDescription px-5 pb-5">{description}</div>
      </div>

      <div className="pb-5">
        <div className="d-flex justify-content-center">
          <div className="cardComponentRate">{rate}</div>
        </div>
        {link ? (
          <div className="d-flex justify-content-center">
            <Link href={`${link}`}>
              <Button
                variant="secondary"
                className="cardComponentReadMore mt-2 text-primary"
              >
                See More
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
