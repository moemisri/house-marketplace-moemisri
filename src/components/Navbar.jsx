import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as PersonalOutLineIcon } from "../assets/svg/personOutlineIcon.svg";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItems" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              wdith="36"
              hight="36"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItems" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
              wdith="36"
              hight="36"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItems" onClick={() => navigate("/profile")}>
            <PersonalOutLineIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              wdith="36"
              hight="36"
            />
            <br></br>
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
