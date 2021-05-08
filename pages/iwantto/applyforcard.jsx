import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const Apply = () => {
  return (
    <Basic title="Apply for a card" image="/i_want_to/applyForCard.jpg">
      <p>
        Before deciding on a card, it is important to consider what you intend
        to use it for so you can find the most suitable option. It might be
        reserved for emergencies, or used to shop online and pay bills, or
        simply as an alternative to carrying around cash.
      </p>

      <p>
        Your spending style helps to determine which card offers the best value
        and features for your requirements.
      </p>

      <PrimaryLink link="/products/cards">
        Explore our range of cards
      </PrimaryLink>
    </Basic>
  );
};

export default Apply;
