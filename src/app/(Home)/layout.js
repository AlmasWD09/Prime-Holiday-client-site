
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";


export const metadata = {
  title: "Prime Holiday Destinations",
  description: "Generated by create next app",
};

export default function layout({ children }) {
  return (
 
      <div>
        <Navbar />
        <CookieConsent />
        {children}
        <Footer />
      </div>
 
  );
}
