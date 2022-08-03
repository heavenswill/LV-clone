import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="contaier" id={styles.footer}>
      <div className="row w-100">
        <div className="col-12 mt-4">
          <p id={styles.logoName}>LOUIS VUITTON</p>
          <hr />
        </div>
        <div>
          <ul className="nav" id={styles.navbar}>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                <FontAwesomeIcon icon={faGlobe} /> ENGLISH (INTL)
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Newsletter
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Stores
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Sustainability
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Apps
              </a>
            </li>
            <li className="colnav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Follow Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Legal & Privacy
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Cookies
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
