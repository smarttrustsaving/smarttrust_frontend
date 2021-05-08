import {
  // FaKey,
  FaHome,
  FaPiggyBank,
  FaPersonBooth,
  // FaCar,
  // FaCreditCard,
  FaPlane,
  FaCoins,
  FaSignal,
  FaUniversity,
  FaDollarSign,
  FaPhone,
  FaCalculator,
  FaPercent,
  FaPhotoVideo,
  FaLocationArrow,
  FaMoneyBillWave,
} from "react-icons/fa";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const DefaultNavbar = () => {
  const navLinks = [
    {
      name: "I want to",
      link: "iwantto",
      children: [
        {
          name: "Buy a home",
          icon: <FaHome />,
          link: "buyhome",
        },
        {
          name: "Open a savings account",
          icon: <FaPiggyBank />,
          link: "opensavings",
        },
        {
          name: "Get a personal loan",
          icon: <FaPersonBooth />,
          link: "getpersonalloan",
        },
        // {
        //   name: "Apply for a card",
        //   icon: <FaCreditCard />,
        //   link: "applyforcard",
        // },
        {
          name: "Go on a holiday",
          icon: <FaPlane />,
          link: "holiday",
        },
        {
          name: "Get financial advice",
          icon: <FaCoins />,
          link: "getfinancialadvice",
        },
        {
          name: "Save for a goal",
          icon: <FaSignal />,
          link: "saveforagoal",
        },
        {
          name: "Join Smart Trust ",
          icon: <FaUniversity />,
          link: "joinsmarttrust",
        },
      ],
    },
    {
      name: "Products",
      link: "products",
      children: [
        {
          name: "Loans",
          icon: <FaHome />,
          link: "loans",
        },
        // {
        //   name: "Cards",
        //   icon: <FaCreditCard />,
        //   link: "cards",
        // },
        {
          name: "Savings & Investments",
          icon: <FaPiggyBank />,
          link: "savingsinvestments",
        },
        {
          name: "Foreign Exchange",
          icon: <FaDollarSign />,
          link: "foreignexchange",
        },
        {
          name: "Financial Advice",
          icon: <FaMoneyBillWave />,
          link: "financialadvice",
        },
      ],
    },
    {
      name: "Tools",
      link: "tools",
      children: [
        {
          name: "Calculator",
          icon: <FaCalculator />,
          link: "calculator",
        },
        {
          name: "Rate & Fees",
          icon: <FaPercent />,
          link: "ratefees",
        },
        {
          name: "Find Us",
          icon: <FaLocationArrow />,
          link: "find",
        },
        {
          name: "Forex Meter",
          icon: <FaDollarSign />,
          link: "forexmeter",
        },
      ],
    },
    {
      name: "Contact",
      link: "contact",
      children: [
        {
          name: "Contact us",
          icon: <FaPhone />,
          link: "",
        },
        {
          name: "Social Media",
          icon: <FaPhotoVideo />,
          link: "socialmedia",
        },
      ],
    },
    {
      name: "About",
      link: "about",
      children: [
        {
          name: "About Us",
          icon: <FaUniversity />,
          link: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="d-md-flex d-none">
        <Desktop links={navLinks} />
      </div>
      <div className="d-md-none d-flex">
        <Mobile links={navLinks} />
      </div>
    </>
  );
};

export default DefaultNavbar;
