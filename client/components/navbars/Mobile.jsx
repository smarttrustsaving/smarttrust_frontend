import React from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { Image } from "react-bootstrap";
import MobileNavElement from "./MobileNavElement";

const Mobile = ({ links }) => {
  const router = useRouter();

  const [dropdown, setDropdown] = React.useState(false);

  return (
    <nav>
      <div id="mobileNavbar">
        <div className="mobileHamburger" onClick={() => setDropdown(!dropdown)}>
          <GiHamburgerMenu />
        </div>
        <div
          className="d-flex align-items-center pl-4"
          onClick={() => {
            setDropdown(false);
            router.push("/");
          }}
        >
          <Image className="mobileNavLogo" src={`/nav.jpg`} />
        </div>
      </div>

      {dropdown ? (
        <div className="mobileNavRelative">
          <div className="mobileNavAbsolute">
            {links.map((link, index) => (
              <MobileNavElement
                key={index}
                name={link.name}
                link={link.link}
                sublinks={link.children}
                dropdownHandler={() => setDropdown(false)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Mobile;
