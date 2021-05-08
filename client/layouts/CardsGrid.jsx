import Card from "./Card";

const CardsGrid = ({ cards, prelink }) => {
  return (
    <div className="cardsGridContainer">
      {cards.map(
        ({ type, description, image = "business.jpg", rate, link }, index) => (
          <div key={index} className="p-3">
            <Card
              title={type}
              description={description}
              image={`${prelink}/${image}`}
              rate={
                <div>
                  <span className="cardRateNumber">{rate}</span>
                  <span className="cardRatePercent">%</span>
                  <span className="cardRatePA">p.a.</span>
                  <sup>1</sup>
                </div>
              }
              link={link}
            ></Card>
          </div>
        )
      )}
    </div>
  );
};

export default CardsGrid;
