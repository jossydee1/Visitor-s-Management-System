import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Reception from "./Reception.jpg";
function Home() {
	return (
		<div className="home">
			<p className="home__line1">DANA HOUSE</p>
			<div className="home__line2">To</div>
			<div className="home__line3">Built By IT Department, DANA HOUSE</div>
			<Link to="/vms/register/">
				<button className="home__button">Welcome</button>
			</Link>
			<img src={Reception} />
		</div>
	);
}

export default Home;
