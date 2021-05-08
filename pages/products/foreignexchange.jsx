import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const ForeignExchange = () => {
  return (
    <Basic title="Foreign Exchange" image="/products_page/forex.jpg">
      <p className="py-4">
        If you are looking for foreign exchange price in Nepal, then you have
        landed at the right place. Find everything related to currency exchange
        rates here. Forex price for nepal are under the Central Bank of Nepal -
        Nepal Rastra Bank and the leading commercial banks of Nepal. Nepali
        exchange rates for today availabe for US Dollar, European Euro, UK Pound
        Sterling, Australian Dollar, Canadian Dolla, Swiss Franc, Chinese Yuan,
        Japanese Yen, Saudi Arabian Riyal, Singapore Dollar, Qatari Riyal, Thai
        Baht, UAE Dirham, Malaysian Ringgit, Bahrain Dinar, Kuwaity Dina, Hong
        Kong Dollar, Swedish Kroner, South Korean Won, Danish Kron and Exchange
        Rates for Indian Rs 100 Fixed by Nepal Rastra Bank to Rs Nepalese Rs
        160.
      </p>

      <PrimaryLink link="/tools/forexmeter">
        See the current forex rates
      </PrimaryLink>
    </Basic>
  );
};

export default ForeignExchange;
