import Link from "next/link";
import { Container } from "react-bootstrap";
import {
  FaHome,
  FaPiggyBank,
  FaPercent,
  FaCalculator,
  FaDollarSign,
  FaSearchLocation,
} from "react-icons/fa";

const Icons = () => {
  const icons = [
    { name: "Forex", icon: <FaDollarSign />, link: "/tools/forexmeter" },
    { name: "Loans", icon: <FaHome />, link: "/products/loans" },
    { name: "Find us", icon: <FaSearchLocation />, link: "/tools/find" },
    {
      name: "Savings & Investments",
      icon: <FaPiggyBank />,
      link: "/products/savingsinvestments",
    },
    { name: "Rates & Fees", icon: <FaPercent />, link: "/tools/ratefees" },
    { name: "Calculators", icon: <FaCalculator />, link: "/tools/calculator" },
  ];

  return (
    <Container className="pt-5">
      <div className="iconGridContainer">
        {icons.map((i) => (
          <Link key={i.name} href={i.link}>
            <div className="iconGridItem pointer pb-5">
              <div className="icon">{i.icon}</div>
              <div className="name">{i.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Icons;
