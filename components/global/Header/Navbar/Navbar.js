// Main Imports
import { useState, useEffect } from "react";
// Components
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import CustomOffcanvas from "../../../CustomOffcanvas/CustomOffcanvas";
import CustomModal from "../../../CustomModal/CustomModal";
import CustomAccordion, {
  AccordionItem,
} from "../../../CustomAccordion/CustomAccordion";
import CartCanvas from "../../../Home/CartCanvas/CartCanvas";
import MainButton from "../../../MainButton/MainButton";
// Styles
import styles from "./Navbar.module.css";
import ListItems from "../../../ListItems/ListItems";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../../../redux/slices/cartSlice";

function generateId() {
  return Math.random().toString(32).slice(2);
}

const categories = [
  {
    id: generateId(),
    title: "All Categories",
    firstSub: [
      { id: generateId(), title: "Electronics" },
      { id: generateId(), title: "Mobiles" },
      { id: generateId(), title: "Men" },
      { id: generateId(), title: "Women" },
      { id: generateId(), title: "Home" },
      {
        id: generateId(),
        title: "Home Decor",
        subCategories: [
          { id: generateId(), title: "clocks" },
          { id: generateId(), title: "lighting" },
          { id: generateId(), title: "vases" },
        ],
      },
    ],
  },
  {
    id: generateId(),
    title: "Mobiles",
    firstSub: [
      { id: generateId(), title: "Mobile New Arrivals" },
      { id: generateId(), title: "All Mobile Phones" },
      { id: generateId(), title: "All Tablets" },
      { id: generateId(), title: "Wireless Earphones" },
      { id: generateId(), title: "Mobile Gaming & VR Gadgets" },
      { id: generateId(), title: "Mobile Gaming & VR Gadgets" },
    ],
  },
  {
    id: generateId(),
    title: "Home",
    firstSub: [
      { id: generateId(), title: "Home Appliances" },
      { id: generateId(), title: "Cookware" },
      { id: generateId(), title: "Drinkware" },
      { id: generateId(), title: "Bath & Bedding" },
      {
        id: generateId(),
        title: "Home Decor",
        subCategories: [
          { id: generateId(), title: "clocks" },
          { id: generateId(), title: "lighting" },
          { id: generateId(), title: "vases" },
        ],
      },
    ],
  },
];

const canvasItems = {
  sideNav: false,
  locator: false,
  cart: false,
};

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { lang } = useSelector((state) => state.shared);
  const dispatch = useDispatch();

  const [canvasShow, setCanvasShow] = useState(canvasItems);

  const handleShowCanvas = (choice) => {
    setCanvasShow((prev) => ({
      ...prev,
      [choice]: !prev[choice],
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      dispatch(getCart(JSON.parse(localStorage.getItem("cart"))));
    }
  }, [dispatch]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className="container d-flex flex-wrap g1">
          <NavbarBrand handleShowCanvas={handleShowCanvas} />
          <NavbarSearch />
          <NavbarOptions
            handleShowCanvas={handleShowCanvas}
            count={cart?.length ? cart.length : "0"}
          />
        </div>
      </nav>

      {/* SideBar Canvas */}
      <CustomOffcanvas
        show={canvasShow.sideNav}
        handleClose={() => handleShowCanvas("sideNav")}
        title={`Hello, User`}
        placement={lang === "en" ? "start" : "end"}
      >
        <CustomAccordion flush>
          {categories?.map((cat) => (
            <AccordionItem
              key={cat.id}
              eventKey={cat.id}
              header={cat.title}
              iconPosition="end"
            >
              <ListItems categories={cat.firstSub} />
            </AccordionItem>
          ))}
        </CustomAccordion>
      </CustomOffcanvas>
      {/* Location Modal */}
      <CustomModal
        show={canvasShow.locator}
        title="Add New Address"
        handleClose={() => handleShowCanvas("locator")}
        centered
        aria-labelledby="Add New Address"
      >
        <div className={styles.locator}>
          <input type="text" placeholder="Search Location" />
          {/* The div element for the map */}
          <div id="map" className={styles.map}></div>
          <hr />
          <div className="d-flex align-items-center justify-content-end">
            <MainButton text="confirm location" bg="alt-outline" />
          </div>
        </div>
      </CustomModal>
      {/* Cart Canvas */}
      <CartCanvas
        show={canvasShow.cart}
        handleClose={() => handleShowCanvas("cart")}
        placement={lang === "en" ? "end" : "start"}
        cart={cart}
      />
    </>
  );
};

export default Navbar;
