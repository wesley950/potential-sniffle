import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link style={{ textDecoration: "none" }} to="/">
                        <div className="nav-link">Home</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={{ textDecoration: "none" }} to="/trending/">
                        <div className="nav-link">Trending</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={{ textDecoration: "none" }} to="/new/">
                        <div className="nav-link">Recent</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
