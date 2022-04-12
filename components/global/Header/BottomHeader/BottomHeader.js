// Main Imports
import { useState } from "react";
// Components
import HoveredLink from "./HoveredLink/HoveredLink";
import DropdownBody from "./DropdownBody/DropdownBody";
// Styles
import styles from "./BottomHeader.module.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const BottomHeader = ({ categories }) => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className={styles["nav"]}>
      <div className="row g-0">
        {categories?.slice(0, 5).map((cat, i) => (
          <div
            className={i === 0 ? "col-3 border-end" : "col"}
            key={cat.id}
            onMouseEnter={() => setActiveLink(cat.id)}
            onMouseLeave={() => setActiveLink(null)}
          >
            <HoveredLink
              text={cat.title}
              classes={
                activeLink === cat.id
                  ? `${styles.active} text-uppercase text-center`
                  : "text-uppercase text-center"
              }
            >
              {i === 0 && (
                <FontAwesomeIcon icon={faChevronDown} className="mx-2" />
              )}
            </HoveredLink>
            {activeLink === cat.id && <DropdownBody category={cat} index={i} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomHeader;
