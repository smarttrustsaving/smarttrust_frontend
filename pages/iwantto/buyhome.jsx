import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const BuyHome = () => {
  return (
    <Basic title="Buy a Home" image="/i_want_to/buyHome.jpg">
      <p>
        Regardless of whether you are looking to buy your first home, your next
        home, an investment property, or even to refinance, we can help you find
        a home loan to suit your needs.
      </p>
      <p className="pt-5">
        Buying your first home is a significant milestone and finding the right
        loan for your circumstances could help get you into the property market
        sooner. With such a significant financial investment, it is important to
        understand your borrowing power, financial commitments, and to evaluate
        the different loan types, features and interest rate options available.
      </p>

      <PrimaryLink link="/products/loans">See our loan options</PrimaryLink>
    </Basic>
  );
};

export default BuyHome;
