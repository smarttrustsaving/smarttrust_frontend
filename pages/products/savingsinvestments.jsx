import Basic from "../../client/layouts/Basic";
import CardsGrid from "../../client/layouts/CardsGrid";

const Cards = () => {
  const accounts = [
    {
      name: "Savings Account",
      description: (
        <div>
          These are the savings accounts we provide.
          <div className="pt-4">
            <ul>
              <li>
                <b>General Saving</b>
              </li>
              <li>
                <b>Smart Trust Super Saving</b>
              </li>
              <li>
                <b>Business Saving</b>
              </li>
              <li>
                <b>Smart Trust Saving</b>
              </li>
              <li>
                <b>Recurring Saving</b>
              </li>
              <li>
                <b>Special Saving</b>
              </li>
            </ul>
          </div>
        </div>
      ),
      image: "saving.jpg",
      rate: <span className="cardRateNumber">Upto 6</span>,
      link: "/tools/ratefees",
    },
    {
      name: "Fixed Deposit Account",
      description: (
        <div>
          <div>
            <b>
              <ul>
                <li>
                  Periodic Deposit can be opened with a minimum balance of NRs.
                  10,000.00.
                </li>
                <li>Interest is payable Quarterly.</li>
                <li>Loan upto 90% against Periodic Deposit Receipt.</li>
                <li>Time Period begins from six months.</li>
                <li>Nomination facility is available.</li>
                <li>
                  Interest can be received in Quarterly, Yearly and as per
                  depositor’s demand at Maturity.
                </li>
                <li>Loan upto 90% of Periodic Deposit Amount.</li>
              </ul>
            </b>
          </div>
        </div>
      ),
      image: "term.jpg",
      rate: <span className="cardRateNumber">Upto 9</span>,
      link: "/tools/ratefees",
    },
  ];

  return (
    <Basic image="/products_page/savings.jpg" title="Accounts">
      <div>
        <CardsGrid cards={accounts} prelink="/deposits_page" />
      </div>

      <div className="pt-5">
        <div>
          <b>Documents:</b>
        </div>
        <p>
          The copy of the following certified documents has to be submitted
          while requesting for opening of Account.
        </p>

        <div className="pl-5">
          <ul>
            <li>Citizenship Copy</li>
            <li>4 pp size photos</li>
          </ul>
        </div>

        <div className="pt-5">
          <div>
            <b>Features :</b>
          </div>

          <div className="pl-5">
            <ul>
              <li>Cheque book with account holder’s name.</li>
              <li>No restriction on withdrawal.</li>
              <li>Interest is payable quarterly.</li>
              <li>Statement of account will be furnished on demand basis.</li>
              <li>Nomination facility is available</li>
            </ul>
          </div>
        </div>
      </div>
    </Basic>
  );
};

export default Cards;
