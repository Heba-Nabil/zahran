// Styles
import styles from "./NavbarSearch.module.css";
// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarSearch = () => {
  return (
    <form className={styles.search}>
      <div className="input-group">
        <input
          type="text"
          placeholder="What are you looking for?"
          aria-label="What are you looking for?"
          aria-describedby="search"
        />
        <span className={styles.icon} id="search">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </form>
  );
};

export default NavbarSearch;
