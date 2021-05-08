import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import Basic from "../../client/layouts/Basic";
import Loading from "../../client/components/Loading";
import api from "../../client/api";

const flags = [
  { currency: "aed", code: "ae" },
  { currency: "afn", code: "af" },
  { currency: "aud", code: "hm" },
  { currency: "brl", code: "br" },
  { currency: "bgn", code: "bg" },
  { currency: "cad", code: "ca" },
  { currency: "chf", code: "ch" },
  { currency: "cny", code: "cn" },
  { currency: "czk", code: "cz" },
  { currency: "dkk", code: "dk" },
  { currency: "gbp", code: "gb" },
  { currency: "hkd", code: "hk" },
  { currency: "hrk", code: "hr" },
  { currency: "huf", code: "hu" },
  { currency: "idr", code: "id" },
  { currency: "ils", code: "il" },
  { currency: "inr", code: "in" },
  { currency: "isk", code: "is" },
  { currency: "jpy", code: "jp" },
  { currency: "krw", code: "kr" },
  { currency: "mxn", code: "mx" },
  { currency: "myr", code: "my" },
  { currency: "nok", code: "no" },
  { currency: "nzd", code: "nz" },
  { currency: "php", code: "ph" },
  { currency: "pln", code: "pl" },
  { currency: "ron", code: "ro" },
  { currency: "rub", code: "ru" },
  { currency: "sek", code: "se" },
  { currency: "sgd", code: "sg" },
  { currency: "thb", code: "th" },
  { currency: "try", code: "tr" },
  { currency: "usd", code: "us" },
  { currency: "zar", code: "za" },
];

const Forex = () => {
  const router = useRouter();

  const [rates, setRates] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${api}/forex/all`)
      .then(({ data }) => {
        setRates(data?.rates);
      })
      .catch((_) => setError(true));
  }, []);

  /*





  */
  const flagHandler = (currency) => {
    const flag = flags.find(
      (f) => currency.toLowerCase() === f.currency.toLocaleLowerCase()
    );

    return flag.code;
  };

  const ratesHandler = () => {
    return Object.entries(rates).map((rate, index) => {
      const current = flags.find(
        (flag) => rate[0].toLowerCase() === flag.currency.toLocaleLowerCase()
      );

      if (!current) return null;

      return (
        <tr key={index}>
          <td>{index + 1}</td>

          <td>
            <span>{rate[0]}</span>
            <span className="pl-3">
              <Image
                src={`https://www.countryflags.io/${flagHandler(
                  rate[0]
                )}/shiny/32.png`}
              />
            </span>
          </td>

          <td>
            {parseFloat((rates.INR * 1.6) / parseFloat(rate[1])).toFixed(3)}
          </td>
        </tr>
      );
    });
  };

  /*




  */

  if (error) router.push("/");
  if (!rates) return <Loading />;

  return (
    <Basic title="Forex Exchange Rates" image="/tools_page/rate.jpg">
      <Table striped bordered hover size="xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Currency</th>
            <th>Rs.</th>
          </tr>
        </thead>

        <tbody>{ratesHandler()}</tbody>
      </Table>
    </Basic>
  );
};

export default Forex;
