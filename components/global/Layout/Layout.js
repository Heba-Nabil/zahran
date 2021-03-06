// Main Imports
import { useState, useEffect } from "react";
// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter/MobileFooter";
import GoUp from "../../GoUp/GoUp";
import FloatingCart from "../../FloatingCart/FloatingCart";
// Styles
import styles from "./Layout.module.css";

let once = true;

const Layout = ({ children }) => {
  const [showGoup, setShowGoup] = useState(false);

  const handleGoupShow = () => {
    if (window.scrollY > window.outerHeight) {
      if (once) {
        once = !once;
        setShowGoup(true);
      }
    } else {
      if (!once) {
        once = !once;
        setShowGoup(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleGoupShow);

    return () => window.removeEventListener("scroll", handleGoupShow);
  }, []);

  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
      <MobileFooter />
      <GoUp
        position="start"
        show={showGoup}
        onClick={() => window.scroll({ top: 0 })}
      />
      <FloatingCart position="end" />
    </div>
  );
};

export default Layout;
