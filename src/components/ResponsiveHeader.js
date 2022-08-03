import React, { useState } from "react";
import styles from "./ResponsiveHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faHeart,
  faLocationDot,
  faGlobe,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";

const ResponsiveHeader = ({ usenav, navClick }) => {
  // const [nav, setNav] = useState(false);

  // const navHandler = () => {
  //   if (nav === false) {
  //     setNav(true);
  //   }
  //   if (nav === true) {
  //     setNav(false);
  //   }
  // };

  return (
    <div className="container-fluid" id={styles.navbar}>
      <Headroom>
        <div className="row" id={styles.navs}>
          <div className="col-3 text-start" id={styles.navbarIcon}>
            <FontAwesomeIcon
              icon={faBars}
              id={styles.faBars}
              onClick={navClick}
              className="ms-2"
              style={{ fontWeight: "100" }}
            />
          </div>
          <div className="col-6 text-center" id={styles.logo}>
            <h4 style={{ fontWeight: "600" }} className="">
              LOUIS VUITTON
            </h4>
          </div>
          <div className="col-3 text-end" id={styles.navbarSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
          </div>
        </div>
        {usenav && (
          <div id={styles.toggleNavbar} className="container-fluid">
            <hr />
            <div id={styles.toggleNavLinks}>
              <a href="#" className="ms-5">
                NEW
              </a>
              <br />
              <hr className="w-75" />
              <a href="#" className="ms-5">
                WOMEN
              </a>
              <br /> <hr className="w-75" />
              <a href="#" className="ms-5">
                MEN
              </a>
              <br /> <hr className="w-75" />
              <a href="#" className="ms-5">
                ART OF LIVING
              </a>
              <br /> <hr className="w-75" />
              <a href="#" className="ms-5">
                WORLD OF LOUIS VUITTON
              </a>{" "}
              <hr className="w-75" />
            </div>
            <div className="container-fluid" id={styles.toggleFooterLinks}>
              <a href="#">Sustainability</a>
              <br />
              <hr className="w-75" />
              <a href="#">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "17px" }} />{" "}
                My LV
              </a>
              <br />
              <hr className="w-75" />
              <a href="#">
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: "17px" }} />{" "}
                Wishlist
              </a>
              <br />
              <hr className="w-75" />
              <a href="#">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ fontSize: "17px" }}
                />{" "}
                Stores
              </a>
              <br />
              <hr className="w-75" />
              <a href="#">
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "17px" }} />{" "}
                ENGLISH(INTL)
              </a>
              <br />
              <hr className="w-75" />
              <a href="#">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  style={{ fontSize: "17px" }}
                />{" "}
                Can we help you?
              </a>
            </div>
          </div>
        )}
      </Headroom>
    </div>
  );
};

export default ResponsiveHeader;
