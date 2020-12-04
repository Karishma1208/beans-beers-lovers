import React from "react";
import { Link } from "react-router-dom";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/reactjs-beer-lovers">Beans Beer Loves</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/favorite">
                Favourites <FavoriteSharpIcon className="faviort-icon" />
              </Link>
            </li>

            <li>
              <Link to="/reactjs-beer-lovers" className="btn btn-main">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
