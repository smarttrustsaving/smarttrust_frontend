import DefaultNavbar from "../components/navbars/DefaultNavbar";
import Footer from "../components/Footer";

const DefaultLayout = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <DefaultNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
