import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const FinancialAdvice = () => {
  return (
    <Basic title="Financial Advice" image="/products_page/financialAdvice.jpg">
      <p className="py-4">
        Seeking financial advice can be a great way to make the most of what you
        have today and prepare for tomorrow. An adviser will work to first
        understand your individual circumstances and goals, before crafting a
        way forward. They can provide a clearer picture of your current
        financial position and help create strategies to achieve your financial
        goals.
      </p>

      <PrimaryLink>Plannig for your future</PrimaryLink>
      <p className="pb-4">
        Anytime is a good time to start thinking about and planning for your
        future. People often seek financial advice in preparation for, or in
        response to, certain life stages and events such as:
      </p>
      <div className="py-4 pl-5">
        <ul>
          <li>Getting married</li>
          <li>Purchasing your first property – or your next</li>
          <li>Starting or growing your family</li>
          <li>Starting a business</li>
          <li>Career change or change in income</li>
          <li>Retirement</li>
        </ul>
      </div>
      <PrimaryLink>
        Some of the common ways financial advice can assist you include:
      </PrimaryLink>
      <div className="pb-4 pl-5">
        <ul>
          <li>Debt and cash flow management</li>
          <li>Wealth creation and protection</li>
          <li>Investment strategies</li>
          <li>Retirement and estate planning</li>
        </ul>
      </div>
      <p className="py-4">
        To get the most out of meeting with an adviser, it is best to go in
        prepared, knowing:
      </p>
      <div className="py-4 pl-5">
        <ul>
          <li>
            What you own: property, car, savings, super, investments, and the
            insurances you have in place
          </li>
          <li>
            Your debts and obligations: what you owe on your mortgage, credit
            cards, personal loans, car leases, student loans and any other debts
          </li>
          <li>Your income and living expenses</li>
          <li>Your financial goals and what you would like to achieve</li>
        </ul>
      </div>
      <p className="py-4">
        For more information on financial advice and the alternatives, visit
        ASIC’s MoneySmart website.
      </p>
      <p className="py-py-4">
        If you decide to seek financial advice or speak to an adviser, you can
        contact Smart Trust's financial advice partner ClearView directly, or we
        can set up an introductory meeting.
      </p>
    </Basic>
  );
};

export default FinancialAdvice;
