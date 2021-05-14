import DefaultNavbar from "../components/navbars/DefaultNavbar";
import Footer from "../components/Footer";
import Notice from "../components/Notice";

const DefaultLayout = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <Notice />

      <DefaultNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
