import React from "react";
import { useRouter } from "next/router";
import { Container, Image } from "react-bootstrap";

const Desktop = ({ links }) => {
  const router = useRouter();

  const [dropdown, setDropdown] = React.useState(false);
  const [name, setName] = React.useState("null");

  const routeToSubLink = (link) => {
    if (dropdown) setDropdown(!dropdown);
    router.push(link);
  };

  const changeLink = (n) => {
    setName(n);

    if (n == name) {
      setDropdown(!dropdown);
    } else {
      if (!dropdown) {
        setDropdown(!dropdown);
      }
    }
  };

  const getSubLinks = () => {
    const { children, link } = links.find((link) => link.name == name);

    if (children)
      return children.map((children) => {
        const newLink = `/${link}/${children.link}`;

        return {
          ...children,
          link: newLink,
        };
      });

    return [];
  };

  return (
    <>
      <nav className="desktopNavbar">
        <div onClick={() => routeToSubLink("/")}>
          <Container className="py-3">
            <Image className="navbarLogo" src={`/nav.jpg`} />
          </Container>
        </div>
        <div className="navLinksContainer">
          <Container>
            {links.map((link, index) => (
              <div
                key={index}
                onClick={() => changeLink(link.name)}
                className="navLink"
              >
                {link.name}
              </div>
            ))}
          </Container>
        </div>
        {dropdown && getSubLinks() ? (
          <Container className="navbarRelative">
            <div className="navbarAbsolute">
              {getSubLinks().map((link, index) => (
                <div
                  key={index}
                  className="navSubLinks"
                  onClick={() => routeToSubLink(link.link)}
                >
                  <div>
                    <div className="navSubLinkIcon">{link.icon}</div>

                    <div className="navSubLinkTitle">{link.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        ) : null}
      </nav>
      <div id="fakeNavbar"> </div>
    </>
  );
};

export default Desktop;
