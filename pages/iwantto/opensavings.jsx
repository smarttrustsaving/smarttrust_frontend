import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const Open = () => {
  return (
    <Basic title="Open a Savings Account" image="/i_want_to/savings.jpg">
      <p>
        Smart Trust has a range of savings accounts and term deposits to help
        you spend or save, the way you want. Understanding how you want to use
        your money will help you to decide the account that is right for you.
      </p>
      <PrimaryLink link="/products/savingsinvestments">
        See our savings accounts
      </PrimaryLink>
    </Basic>
  );
};

export default Open;
