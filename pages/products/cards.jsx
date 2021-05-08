import Basic from "../../client/layouts/Basic";
import CardsGrid from "../../client/layouts/CardsGrid";

const Cards = () => {
  const cards = [
    {
      name: "Debit Card",
      description: (
        <div>
          Access your funds and make purchases using your own money with a Smart
          Trust Debit Card.
        </div>
      ),
      image: "debitCard.jpg",
      rate: <h1>-</h1>,
      link: "/tools/ratefees",
    },
    {
      name: "Credit Card",
      description: (
        <div>
          All the things you would expect from a premium credit card.
          <div className="pt-4">
            <ul style={{ listStyle: "none" }}>
              <li>
                <b>Up to 50 days interest free</b>
              </li>
              <li>
                <b>Free Membership</b>
              </li>
            </ul>
          </div>
        </div>
      ),
      image: "creditCard.jpg",
      rate: (
        <div>
          <span className="cardRateNumber">18.74</span>
          <span className="cardRatePercent">%</span>
          <span className="cardRatePA">p.a.</span>
        </div>
      ),
      link: "/tools/ratefees",
    },
    {
      name: "Visa Card",
      description: (
        <div>
          Access your funds and make purchases using your own money with a Smart
          Trust Visa Card.
          <div className="pt-4">
            <ul style={{ listStyle: "none" }}>
              <li>
                <b>Up to 50 days interest free</b>
              </li>
              <li>
                <b>Free Membership</b>
              </li>
            </ul>
          </div>
        </div>
      ),
      image: "visa.jpg",
      rate: (
        <div>
          <span className="cardRateNumber">7.49</span>
          <span className="cardRatePercent">%</span>
          <span className="cardRatePA">p.a.</span>
        </div>
      ),
      link: "/tools/ratefees",
    },
  ];

  return (
    <Basic image="/products_page/cards.jpg" title="Cards">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
      <div>
        <CardsGrid cards={cards} prelink="/products_page/cards" />
      </div>
    </Basic>
  );
};

export default Cards;
