import Basic from "../../client/layouts/Basic";
import CardsGrid from "../../client/layouts/CardsGrid";
import Loading from "../../client/components/Loading";
import { useEffect, useState } from "react";
import axios from "../../client/axios";

const HomeLoans = () => {
  const [loans, setLoans] = useState(undefined);

  useEffect(() => {
    axios.get("/all/loans").then(({ data }) => {
      setLoans(data);
    });
  }, []);

  if (!loans) return <Loading />;

  return (
    <Basic image="/products_page/homeLoans.jpg" title="Loans">
      <div>
        <CardsGrid cards={loans} prelink="/products_page/loans" />
      </div>
    </Basic>
  );
};

export default HomeLoans;
