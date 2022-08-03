import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";

const Header = () => {
  return (
    <div className="container-fluid" id={styles.border}>
      <Headroom>
        <div className="row">
          <div className="col-4 mt-4" id={styles.icon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="ms-5" />
            <span className="ms-3 mt-1" id={styles.search}>
              Search
            </span>
          </div>
          <div id={styles.logos} className="col-4 mt-4">
            <h3 id={styles.logo}>LOUIS VUITTON</h3>
          </div>
          <div className="col-4 mt-4" id={styles.whislist}>
            <span className="me-4" style={{ cursor: "pointer" }}>
              Wishlist
            </span>
            <span className="me-4" style={{ cursor: "pointer" }}>
              MyLV
            </span>
            <FontAwesomeIcon icon={faGift} className="me-5 mt-1" />
          </div>
          <div id={styles.navbar} className="mt-2">
            <button aria-current="page" href="#" className="me-5">
              NEW
            </button>

            <button href="#" className="me-5">
              WOMEN
            </button>

            <button href="#" className="me-5">
              MEN
            </button>

            <button href="#" className="me-4">
              ART OF LIVING
            </button>

            <button href="#" className="ms-4">
              WORLD OF LOUIS VUITTON
            </button>
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default Header;
