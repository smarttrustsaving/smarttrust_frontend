import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const Personal = () => {
  return (
    <Basic title="Get a personal loan" image="/i_want_to/personalLoan.jpg">
      <p className="pb-5">
        Sometimes you just need a little extra help to achieve your goals
        faster. A personal loan can help to fund or partially fund:
      </p>

      <PrimaryLink link="/products/loans">Holidays and travel</PrimaryLink>
      <p>
        If you are planning the trip of a lifetime or looking to reunite with
        family overseas, you might use a personal loan to help cover travel
        expenses including airfares, accommodation and spending money. You might
        also be interested in travel insurance and foreign exchange products.
      </p>

      <PrimaryLink link="/products/loans">Buying a car</PrimaryLink>
      <p>
        This can be exciting, particularly if it’s your first car. There is so
        much to think about – your budget, your financial situation, financing
        options, insurance, new vs used, along with all the various car types
        and models. Whether it’s your first time buying a car, or time to
        upgrade your existing car, a personal or car loan can help you get that
        new car feeling. You might also be interested in motor insurance and
        Auto Search car buying service.
      </p>

      <PrimaryLink link="/products/loans">Debt consolidation</PrimaryLink>
      <p>
        If you have multiple credit or store cards, car loans, or other bills
        that are mounting, you can take control of your debts by consolidating
        them into one loan with one regular payment. A great way to free
        yourself from the constraint and worry of multiple debts. Plus, you may
        save on fees and charges and reduce your overall interest rate by
        consolidating your debts.
      </p>

      <PrimaryLink link="/products/loans">Renovations</PrimaryLink>
      <p>
        If you’re looking to spruce up your property, or completely renovate it,
        a personal loan can help you bring your vision to life. You might also
        want to consider a home loan top-up or refinancing your home loan to
        fund renovations. Our team can help find the option to suit your needs.
      </p>

      <PrimaryLink link="/products/loans">Wedding plans</PrimaryLink>
      <p>
        Having the wedding of your dreams may seem out of reach. A personal loan
        can help make it happen, covering the many costs associated with your
        wedding, including the dresses, suits, rings, flowers, reception, venue
        and car hire, cake and the honeymoon.
      </p>

      <PrimaryLink link="/products/loans">Growing family</PrimaryLink>
      <p>
        A new addition to the family is exciting, but can also bring a lot of
        change and new expenses. You want to give your child the best start, but
        there’s a lot to provide for, including baby furniture, car seats,
        prams, monitors and potentially medical expenses.
      </p>

      <PrimaryLink link="/products/loans">Unexpected medical bills</PrimaryLink>
      <p className="pb-5">
        Medical expenses are the most common, unexpected expenses that people
        encounter in life. Sometimes the medical cover you may have opted for is
        just not enough and you need a top-up. In this time of crisis, a
        personal loan can help until you are back on your feet.
      </p>

      <PrimaryLink link="/products/loans">See our loan options</PrimaryLink>
    </Basic>
  );
};

export default Personal;
