import { useRouter } from "next/router";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MobileNavElement = ({ name, link, sublinks, dropdownHandler }) => {
  const router = useRouter();

  const [dropdown, setDropdown] = React.useState(false);

  const routeToSubLink = (link) => {
    dropdownHandler();
    router.push(link);
  };

  return (
    <>
      <div className="mobileNavLink" onClick={() => setDropdown(!dropdown)}>
        <div>{name}</div>
        <div>{dropdown ? <FaAngleDown /> : <FaAngleUp />}</div>
      </div>

      {dropdown ? (
        <>
          {sublinks.map((sublink, index) => (
            <div
              key={index}
              onClick={() => routeToSubLink(`/${link}/${sublink.link}`)}
              className="mobileNavSubLink"
            >
              {sublink.name}
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default MobileNavElement;
