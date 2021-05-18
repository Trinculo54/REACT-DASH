import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to={{ pathname: "https://discord.com/api/oauth2/authorize?client_id=577848986464157707&permissions=8&scope=bot%20applications.commands" }}>
            Invite Me <FaDiscord />{" "}
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/commands" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/commands">
                  Commands
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);