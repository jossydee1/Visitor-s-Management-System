import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header__menu">
				<Link to="/">
					<span className="header__menu-item">Home</span>
				</Link>
				<Link to="/b">
					<span className="header__menu-item">Homey</span>
				</Link>
				<Link to="/a">
					<span className="header__menu-item">Homeiii</span>
				</Link>
			</div>
		</div>
	);
}

export default Header;
